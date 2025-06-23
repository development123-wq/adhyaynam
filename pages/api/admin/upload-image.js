
import upload from '@/middleware/multer';
import fs from 'fs/promises';
import path from 'path';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {

    if (req.method === 'POST') {
        upload.single('image')(req, res, async (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'File upload error', err });
            }

            const image = req.file;

            if (!image) {
                return res.status(400).json({ error: 'Title, description, and image are required' });
            }

            const publicDir = path.join(__dirname.split('.next')[0], 'public', 'uploads');
            const fileUrl = path.join(publicDir, req.file.filename);
            const imageData = await fs.readFile(fileUrl);

            // const imageUrl = "http://localhost:3000/uploads/" + req.file.filename
            // res.json({ url:'data:image/jpeg;base64,'+ imageData.toString('base64') })
            res.json({ url:`${req.file.filename}` })
        });
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
