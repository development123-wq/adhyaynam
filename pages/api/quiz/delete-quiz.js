import connectDb from '@/middleware/mongodb';
import Question from '@/models/Question';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    await connectDb();

    if (req.method === 'DELETE') {
        const { id } = req.body; 
        try {
            const ques = await Question.findById(id);

            if (!ques) {
                return res.status(404).json({ error: 'Question not found' });
            }

            const Questionimg = path.join('public/uploads', path.basename(ques.image));

            fs.unlink(Questionimg, (err) => {
                if (err) {
                    console.error('Error deleting image:', err);
                }
            });


            await Question.findByIdAndRemove(id);

            res.status(200).json({ message: 'Question deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while deleting the Question' });
        }
    } else {
        res.status(405).end();
    }
}
