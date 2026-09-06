const mongoose = require('mongoose');

const UpdateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this update.'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description.'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Please provide an image URL.'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.Update || mongoose.model('Update', UpdateSchema);
