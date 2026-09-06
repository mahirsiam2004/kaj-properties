const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const updateRoutes = require('./routes/updates');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/updates', updateRoutes);

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Admin API is running' });
});

app.use(express.static(path.join(__dirname, '../dist')));
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Admin API server running on http://localhost:${PORT}`);
});
