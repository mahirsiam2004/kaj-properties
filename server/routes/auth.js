const express = require('express');
const router = express.Router();

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

router.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      return res.json({
        success: true,
        token: 'admin-token',
        username: ADMIN_USERNAME,
      });
    }

    return res.status(401).json({
      success: false,
      error: 'Invalid credentials',
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message || 'Unknown error',
    });
  }
});

router.put('/change-password', (req, res) => {
  try {
    const { username, currentPassword, newPassword } = req.body;

    if (username === ADMIN_USERNAME && currentPassword === ADMIN_PASSWORD && newPassword) {
      return res.json({ success: true, message: 'Password updated' });
    }

    return res.status(400).json({
      success: false,
      error: 'Invalid current password',
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message || 'Unknown error',
    });
  }
});

module.exports = router;
