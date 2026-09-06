const dbConnect = require('../lib/mongodb');
const Update = require('../models/Update');

module.exports = async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const updates = await Update.find({}).sort({ createdAt: -1 });
      return res.status(200).json({ success: true, data: updates });
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message || 'Unknown error' });
    }
  }

  if (req.method === 'POST') {
    try {
      const update = await Update.create(req.body);
      return res.status(201).json({ success: true, data: update });
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message || 'Unknown error' });
    }
  }

  return res.status(405).json({ success: false, error: 'Method not allowed' });
};
