import connectDb from '../../../middleware/mongodb';
import Blog from '../../../models/BlogSchema';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  await connectDb();

  if (req.method === 'DELETE') {
    const { id } = req.body;

    try {
      const blog = await Blog.findById(id);

      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }

      const blogimg = path.join('public/uploads', path.basename(blog.imagePath));

      const regex = /<img[^>]+src=["'](.*?)["']/g;
      const contentimgSrcArray = [];
      let match;

      while ((match = regex.exec(`${blog?.content}`)) !== null) {
        contentimgSrcArray.push(match[1]);
      }
 
      function deleteImage(imagePath) {
        const imgpath='public/uploads/'+imagePath 
        fs.unlink(imgpath, (err) => {
          if (err) {
            console.error('Error deleting image:', err);
          } else {
            console.log('Image deleted:', imagePath);
          }
        });
      }


      fs.unlink(blogimg, (err) => {
        if (err) {
          console.error('Error deleting image:', err);
        }
      });

      contentimgSrcArray?.forEach((url) => {
        deleteImage(url) 
      });

      await Blog.findByIdAndDelete(id);

      res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while deleting the blog' });
    }
  } else {
    res.status(405).end();
  }
}
