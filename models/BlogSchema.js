import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: String,
  content: String, 
  imagePath: String,
  metaTitle: String,
  metaDes: String, 
  imgAtl: String,
  date:String,
  slug:String
});
 
if (mongoose.models.Blogs) {
  delete mongoose.models.Blogs;
}
 
const Blog = mongoose.model('Blogs', blogSchema);

export default Blog;
