import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
  image: String,
  correctOption: Number,
  subject: String,
  course: String,
  chapter: String,
  paper: String,
  description: String,
});

const Question = mongoose.models.Question || mongoose.model('Question', dataSchema);

export default Question;
