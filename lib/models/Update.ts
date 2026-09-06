import mongoose, { Schema, models } from 'mongoose';

const UpdateSchema = new Schema({
  title:       { type: String, required: [true, 'Please provide a title.'], maxlength: [100, 'Max 100 chars'] },
  description: { type: String, required: [true, 'Please provide a description.'] },
  imageUrl:    { type: String, required: [true, 'Please provide an image URL.'] },
  date:        { type: Date, default: Date.now },
  createdAt:   { type: Date, default: Date.now },
});

export default models.Update || mongoose.model('Update', UpdateSchema);
