import connectDb from '@/middleware/mongodb'; 
import Question from '@/models/Question';
import fs from 'fs/promises';
import path from 'path'; 

export default async function handler(req, res) {
    await connectDb();

    if (req.method === 'GET') {
        try {
            const questions = await Question.find(); 
            const publicDir = path.join(__dirname.split('.next')[0], 'public', 'uploads');

            const questionWithImageUrls = await Promise.all(questions.map(async (question) => {
                const fileUrl = path.join(publicDir, question.image); 
                try {
                    const imageData = await fs.readFile(fileUrl);

                    return {
                        _id: question._id,
                        course: question.course, 
                        subject: question.subject,
                        correctOption: question.correctOption,

                        chapter: question.chapter, 
                        paper: question.paper,
                        description: question.description,
                        image: 'data:image/jpeg;base64,' + imageData.toString('base64'),
                    };
                } catch (error) {
                    console.error('Error reading image:', error);
                    return null;
                }
            }));
            
            const validQuestions = questionWithImageUrls.filter((question) => question !== null);

            res.status(200).json(validQuestions);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while fetching question' });
        }
    } else {
        res.status(405).end();
    }
}
