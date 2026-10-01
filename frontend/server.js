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

const DATA_FILE = path.join(__dirname, 'data.json');

const imagekit = new ImageKit({
  publicKey: process.env.IMG_KIT_PUBLIC_KEY,
  privateKey: process.env.IMG_KIT_PRIVATE_KEY,
  urlEndpoint: process.env.URL_ENDPOINT
});

function readData() {
  const raw = fs.readFileSync(DATA_FILE);
  return JSON.parse(raw);
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
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

app.get('/api/projects', (req, res) => {
  const data = readData();
  res.json(data.projects);
});

app.post('/api/projects', requireAuth, (req, res) => {
  const data = readData();
  const newProject = req.body;
  newProject.id = Date.now().toString(); // simple ID
  data.projects.push(newProject);
  writeData(data);
  res.json(newProject);
});

app.put('/api/projects/reorder', requireAuth, (req, res) => {
  const { reorderedProjects } = req.body;
  const data = readData();
  data.projects = reorderedProjects;
  writeData(data);
  res.json(data.projects);
});

app.put('/api/projects/:id', requireAuth, (req, res) => {
  const data = readData();
  const index = data.projects.findIndex(p => p.id.toString() === req.params.id);
  if (index !== -1) {
    data.projects[index] = { ...data.projects[index], ...req.body };
    writeData(data);
    res.json(data.projects[index]);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.delete('/api/projects/:id', requireAuth, (req, res) => {
  const data = readData();
  data.projects = data.projects.filter(p => p.id.toString() !== req.params.id);
  writeData(data);
  res.json({ success: true });
});


app.get('/api/team', (req, res) => {
  const data = readData();
  res.json(data.team);
});

// For team we have 'core' and 'board'
app.post('/api/team/:section', requireAuth, (req, res) => {
  const { section } = req.params;
  const data = readData();
  if (!data.team[section]) return res.status(400).json({error: 'Invalid section'});
  
  const newMember = req.body;
  newMember.id = Date.now().toString();
  data.team[section].push(newMember);
  writeData(data);
  res.json(newMember);
});

app.put('/api/team/:section/reorder', requireAuth, (req, res) => {
  const { section } = req.params;
  const { reorderedTeam } = req.body;
  const data = readData();
  if (!data.team[section]) return res.status(400).json({error: 'Invalid section'});

  data.team[section] = reorderedTeam;
  writeData(data);
  res.json(data.team[section]);
});

app.put('/api/team/:section/:id', requireAuth, (req, res) => {
  const { section, id } = req.params;
  const data = readData();
  if (!data.team[section]) return res.status(400).json({error: 'Invalid section'});

  const index = data.team[section].findIndex(m => m.id.toString() === id);
  if (index !== -1) {
    data.team[section][index] = { ...data.team[section][index], ...req.body };
    writeData(data);
    res.json(data.team[section][index]);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.delete('/api/team/:section/:id', requireAuth, (req, res) => {
  const { section, id } = req.params;
  const data = readData();
  if (!data.team[section]) return res.status(400).json({error: 'Invalid section'});

  data.team[section] = data.team[section].filter(m => m.id.toString() !== id);
  writeData(data);
  res.json({ success: true });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
