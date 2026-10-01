import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import ImageKit from 'imagekit';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const imagekit = new ImageKit({
  publicKey: process.env.IMG_KIT_PUBLIC_KEY,
  privateKey: process.env.IMG_KIT_PRIVATE_KEY,
  urlEndpoint: process.env.URL_ENDPOINT
});

const DATA_URL = `${process.env.URL_ENDPOINT}data/data.json`;
const LOCAL_DATA_FILE = path.join(__dirname, 'data.json');

// Memory cache for version string to avoid excessive API calls if lambda stays warm
let currentFileVersion = null;

async function getDeterministicVersion() {
  return new Promise((resolve) => {
    imagekit.listFiles({ path: '/data/', searchQuery: 'name="data.json"' }, (err, result) => {
      if (err || !result || result.length === 0) {
        resolve(Date.now().toString());
      } else {
        const file = result.find(f => f.name === 'data.json');
        if (file) {
          resolve(new Date(file.updatedAt).getTime().toString());
        } else {
          resolve(Date.now().toString());
        }
      }
    });
  });
}

async function readData() {
  try {
    if (!currentFileVersion) {
      currentFileVersion = await getDeterministicVersion();
    }
    const response = await fetch(`${DATA_URL}?updatedAt=${currentFileVersion}`);
    if (!response.ok) {
      if (response.status === 404) return { projects: [], team: { core: [], board: [] } };
      throw new Error(`Failed to fetch from ImageKit: ${response.statusText}`);
    }
    return await response.json();
  } catch (err) {
    console.warn("ImageKit read failed, falling back to local data.json:", err.message);
    try {
      const raw = fs.readFileSync(LOCAL_DATA_FILE);
      return JSON.parse(raw);
    } catch (localErr) {
      return { projects: [], team: { core: [], board: [] } };
    }
  }
}

async function writeData(data) {
  return new Promise((resolve, reject) => {
    const fileBuffer = Buffer.from(JSON.stringify(data, null, 2)).toString('base64');
    imagekit.upload({
      file: fileBuffer,
      fileName: 'data.json',
      folder: '/data/',
      useUniqueFileName: false,
      overwriteFile: true
    }, function(error, result) {
      if (error) {
        console.error("Failed to upload data.json to ImageKit:", error);
        return reject(error);
      }
      
      // Update our deterministic version cache to bust CDN cache on next read
      currentFileVersion = Date.now().toString();
      
      // Attempt to purge cache so the next read is fresh
      const urlToPurge = `${process.env.URL_ENDPOINT}data/data.json`;
      imagekit.purgeCache(urlToPurge, function(purgeErr) {
        // We resolve regardless of purge success
        resolve(result);
      });
    });
  });
}

// Auth Middleware
function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin';
  if (authHeader === `Bearer ${adminPassword}`) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
}

// POST login to verify password
app.post('/api/login', (req, res) => {
  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin';
  if (password === adminPassword) {
    res.json({ token: adminPassword });
  } else {
    res.status(401).json({ error: 'Invalid password' });
  }
});

app.get('/api/imagekit/auth', requireAuth, (req, res) => {
  try {
    var result = imagekit.getAuthenticationParameters();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/projects', async (req, res) => {
  try {
    const data = await readData();
    res.json(data.projects || []);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/projects', requireAuth, async (req, res) => {
  try {
    const data = await readData();
    const newProject = req.body;
    newProject.id = Date.now().toString(); // simple ID
    if(!data.projects) data.projects = [];
    data.projects.push(newProject);
    await writeData(data);
    res.json(newProject);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/projects/reorder', requireAuth, async (req, res) => {
  try {
    const { reorderedProjects } = req.body;
    const data = await readData();
    data.projects = reorderedProjects;
    await writeData(data);
    res.json(data.projects);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/projects/:id', requireAuth, async (req, res) => {
  try {
    const data = await readData();
    const index = data.projects.findIndex(p => p.id.toString() === req.params.id);
    if (index !== -1) {
      data.projects[index] = { ...data.projects[index], ...req.body };
      await writeData(data);
      res.json(data.projects[index]);
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/projects/:id', requireAuth, async (req, res) => {
  try {
    const data = await readData();
    data.projects = data.projects.filter(p => p.id.toString() !== req.params.id);
    await writeData(data);
    res.json({ success: true });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/team', async (req, res) => {
  try {
    const data = await readData();
    res.json(data.team || { core: [], board: [] });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// For team we have 'core' and 'board'
app.post('/api/team/:section', requireAuth, async (req, res) => {
  try {
    const { section } = req.params;
    const data = await readData();
    if (!data.team[section]) return res.status(400).json({error: 'Invalid section'});
    
    const newMember = req.body;
    newMember.id = Date.now().toString();
    data.team[section].push(newMember);
    await writeData(data);
    res.json(newMember);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/team/:section/reorder', requireAuth, async (req, res) => {
  try {
    const { section } = req.params;
    const { reorderedTeam } = req.body;
    const data = await readData();
    if (!data.team[section]) return res.status(400).json({error: 'Invalid section'});

    data.team[section] = reorderedTeam;
    await writeData(data);
    res.json(data.team[section]);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/team/:section/:id', requireAuth, async (req, res) => {
  try {
    const { section, id } = req.params;
    const data = await readData();
    if (!data.team[section]) return res.status(400).json({error: 'Invalid section'});

    const index = data.team[section].findIndex(m => m.id.toString() === id);
    if (index !== -1) {
      data.team[section][index] = { ...data.team[section][index], ...req.body };
      await writeData(data);
      res.json(data.team[section][index]);
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/team/:section/:id', requireAuth, async (req, res) => {
  try {
    const { section, id } = req.params;
    const data = await readData();
    if (!data.team[section]) return res.status(400).json({error: 'Invalid section'});

    data.team[section] = data.team[section].filter(m => m.id.toString() !== id);
    await writeData(data);
    res.json({ success: true });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
