import dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';
import ImageKit from 'imagekit';


const ik = new ImageKit({
  publicKey: process.env.IMG_KIT_PUBLIC_KEY,
  privateKey: process.env.IMG_KIT_PRIVATE_KEY,
  urlEndpoint: process.env.URL_ENDPOINT
});

async function runTest() {
  console.log('--- TEST START ---');
  
  // 1. Upload/update data.json
  const raw = fs.readFileSync('data.json');
  const initialData = JSON.parse(raw);
  
  // Add a dummy project for testing update
  initialData.projects.push({ id: Date.now().toString(), title: "Test Project", desc: "Test" });
  
  const fileBuffer = Buffer.from(JSON.stringify(initialData, null, 2)).toString('base64');
  
  console.log(`Uploading to folder: /data/, fileName: data.json`);
  
  ik.upload({
    file: fileBuffer,
    fileName: 'data.json',
    folder: '/data/',
    useUniqueFileName: false,
    overwriteFile: true
  }, async (err, result) => {
    if (err) {
      console.error('Upload failed:', err);
      return;
    }
    
    // 2 & 3. Print returned filePath and url
    console.log('Upload Result filePath:', result.filePath);
    console.log('Upload Result url:', result.url);
    console.log('Upload Result fileId:', result.fileId);
    console.log('Upload Result versionInfo:', result.versionInfo);
    
    // 4. Use listFiles
    ik.listFiles({ path: '/data/' }, async (listErr, files) => {
      if (listErr) {
        console.error('List files failed:', listErr);
        return;
      }
      
      console.log('Files in /data/:', files.map(f => ({ name: f.name, filePath: f.filePath, updatedAt: f.updatedAt, version: f.versionInfo })));
      
      const fileMeta = files.find(f => f.name === 'data.json');
      if (!fileMeta) {
        console.error('data.json not found in listFiles');
        return;
      }
      
      // Determine deterministic cache buster
      const cacheBuster = new Date(fileMeta.updatedAt).getTime();
      const fetchUrl = `${result.url}?v=${cacheBuster}`;
      console.log('Fetch URL with deterministic parameter:', fetchUrl);
      
      // 5 & 6. Fetch exact returned url (with cache buster) and parse
      try {
        const r1 = await fetch(fetchUrl);
        const d1 = await r1.json();
        console.log('Fetch 1 project count:', d1.projects.length);
        
        // 7. Immediately fetch the same URL again
        const r2 = await fetch(fetchUrl);
        const d2 = await r2.json();
        console.log('Fetch 2 project count:', d2.projects.length);
        
        // 8. Confirm
        console.log('Uploaded project count was:', initialData.projects.length);
        if (d1.projects.length === initialData.projects.length && d2.projects.length === initialData.projects.length) {
          console.log('SUCCESS: Written file and read file are the exact same.');
        } else {
          console.log('FAILED: Counts do not match.');
        }
      } catch (fetchErr) {
        console.error('Fetch failed:', fetchErr);
      }
    });
  });
}

runTest();
