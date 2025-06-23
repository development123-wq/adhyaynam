import connectDb from '@/middleware/mongodb';
import upload from '@/middleware/multer'; 
import Question from '@/models/Question';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    await connectDb();
    if (req.method === 'POST') {

        upload.single('image')(req, res, async (err) => { 

            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'File upload error' });
            }
        
            const { correctOption , subject, course, chapter, paper, description } = req.body;
            const image = req.file;
 
            if (!subject || !course || !image || !correctOption) {
                return res.status(400).json({ error: ' All fields are required ' ,subject , image });
            }

            try {
                const question = new Question({
                    correctOption,
                    subject,
                    course,
                    chapter,
                    image: image.filename,
                    paper,
                    description,
                });

                await question.save();
                res.status(201).json({ message: 'Question added successfully' , question });
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred while adding the Question' });
            }
        });
    } else {
        res.status(405).end();  
    }
}
