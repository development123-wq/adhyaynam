import connectDb from '@/middleware/mongodb';
import { Subject } from '@/models/Question';

export default async (req, res) => {
    connectDb();

    if (req.method === 'PUT') {
        const { id, updateData } = req.body;
           console.log(id)
        try {
            const subject = await Subject.findById(id);

            if (!subject) {
                res.status(404).json({ error: 'Subject not found' });
                return;
            }

            subject.set(updateData);

            const updatedSubject = await subject.save();

            res.status(200).json({ message: 'Subject updated successfully', updatedSubject });
        } catch (error) {
            res.status(500).json({ error: 'Error updating the subject.' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};
