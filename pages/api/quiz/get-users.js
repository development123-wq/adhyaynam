
import connectDb from '@/middleware/mongodb';
import User from '@/models/User';

export default async (req, res) => {
    connectDb();

    if (req.method === 'GET') {
        try {
            const users = await User.find({});
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching users.' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};
