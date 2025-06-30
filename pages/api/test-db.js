import connectDb from '@/lib/connectDb'; // or '@/middleware/mongodb' if you already have it

export default async function handler(req, res) {
  try {
    await connectDb();
    res.status(200).json({ message: '✅ MongoDB Connected Successfully' });
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    res.status(500).json({ message: '❌ MongoDB Connection Failed', error: error.message });
  }
}
