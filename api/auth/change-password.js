const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

module.exports = function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { username, currentPassword, newPassword } = req.body;

    if (
      username === ADMIN_USERNAME &&
      currentPassword === ADMIN_PASSWORD &&
      newPassword
    ) {
      return res.status(200).json({ success: true, message: 'Password updated' });
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
};
