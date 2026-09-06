const dbConnect = require('../lib/mongodb');
const Update = require('../models/Update');

module.exports = async function handler(req, res) {
  const { id } = req.query;
  await dbConnect();

  if (req.method === 'PUT') {
    try {
      const update = await Update.findByIdAndUpdate(id, req.body, { new: true });
      if (!update) {
        return res.status(404).json({ success: false, error: 'Update not found' });
      }
      return res.status(200).json({ success: true, data: update });
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message || 'Unknown error' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const update = await Update.findByIdAndDelete(id);
      if (!update) {
        return res.status(404).json({ success: false, error: 'Update not found' });
      }
      return res.status(200).json({ success: true, message: 'Update deleted' });
    } catch (error) {
      return res.status(400).json({ success: false, error: error.message || 'Unknown error' });
    }
  }

  return res.status(405).json({ success: false, error: 'Method not allowed' });
};
