import jwt from 'jsonwebtoken';
import { createToken, verifyToken } from '../../../utils/jwt';

export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method Not Allowed' });
        return;
    }

    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({ message: 'Username and password are required' });
        return;
    }

    if (username === process.env.USER_NAME && password === process.env.USER_PASSWORD) {
        const token = createToken({ username });
        res.status(200).json({ token });
    }
    else {
        res.status(401).json({ message: 'Login failed. You will be blocked after 3 unsuccessful attempts.' });
    }

}

