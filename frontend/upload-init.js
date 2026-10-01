import fs from 'fs';
import path from 'path';
import ImageKit from 'imagekit';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const imagekit = new ImageKit({
  publicKey: process.env.IMG_KIT_PUBLIC_KEY,
  privateKey: process.env.IMG_KIT_PRIVATE_KEY,
  urlEndpoint: process.env.URL_ENDPOINT
});

const DATA_FILE = path.join(__dirname, 'data.json');
const raw = fs.readFileSync(DATA_FILE);

imagekit.upload({
  file: raw.toString('base64'),
  fileName: 'data.json',
  folder: '/rotract/data/',
  useUniqueFileName: false
}, function(error, result) {
  if (error) {
    console.error("Error uploading:", error);
  } else {
    console.log("Success uploading data.json to ImageKit:", result.url);
  }
});
