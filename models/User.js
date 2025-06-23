import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phonenumber: String,
  subject: String,
  city: String,
  score: Number,
});

export default mongoose.models.User || mongoose.model("User", userSchema);
