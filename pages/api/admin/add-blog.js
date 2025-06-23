
import upload from '@/middleware/multer';
import connectDb from '../../../middleware/mongodb'
import Blog from '../../../models/BlogSchema'; 
import { verifyToken } from '../../../utils/jwt';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  await connectDb();

  if (req.method === 'POST') {
    const token = req.headers.authorization?.replace('Bearer ', '');
        if (!token) {
          return res.status(401).json({ message: 'Unauthorized' });
        }
    
        const decoded = verifyToken(token);
        if (!decoded) {
          return res.status(401).json({ message: 'Invalid token' });
        }

    upload.single('image')(req, res, async (err) => {
      console.log(req.body , 'and ' , req.file)
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'File upload error' });
      }

      const { title, content, date, slug ,imgAtl ,metaDes ,metaTitle} = req.body;
      const image = req.file;

      if (!title || !content || !image) {
        return res.status(400).json({ error: 'Title, description, and image are required' });
      }

      try {
        const blog = new Blog({
          title,
          content,
          imagePath: image.filename,
          date,
          slug,
          imgAtl,
          metaDes,
          metaTitle
        });

        await blog.save();
        res.status(201).json({ message: 'Blog added successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while adding the blog' });
      }
    });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
