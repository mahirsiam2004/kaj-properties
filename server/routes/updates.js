const express = require('express');
const router = express.Router();
const dbConnect = require('../lib/mongodb');
const Update = require('../models/Update');

router.get('/', async (req, res) => {
  try {
    await dbConnect();
    const updates = await Update.find({}).sort({ createdAt: -1 });
    res.json({ success: true, data: updates });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message || 'Unknown error' });
  }
});

router.post('/', async (req, res) => {
  try {
    await dbConnect();
    const update = await Update.create(req.body);
    res.status(201).json({ success: true, data: update });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message || 'Unknown error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await dbConnect();
    const update = await Update.findByIdAndUpdate(id, req.body, { new: true });
    if (!update) {
      return res.status(404).json({ success: false, error: 'Update not found' });
    }
    res.json({ success: true, data: update });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message || 'Unknown error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await dbConnect();
    const update = await Update.findByIdAndDelete(id);
    if (!update) {
      return res.status(404).json({ success: false, error: 'Update not found' });
    }
    res.json({ success: true, message: 'Update deleted' });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message || 'Unknown error' });
  }
});

module.exports = router;
