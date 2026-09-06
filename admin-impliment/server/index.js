require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const updateRoutes = require('./routes/updates');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/updates', updateRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Admin API is running' });
});

app.listen(PORT, () => {
  console.log(`Admin API server running on http://localhost:${PORT}`);
});
