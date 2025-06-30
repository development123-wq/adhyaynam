import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://devadmin:oWHmLGKk7NHCsWgG@cluster0.1hoarf8.mongodb.net/adhyayanamacademy?retryWrites=true&w=majority&appName=Cluster0";

// Global cache to avoid reconnects
let isConnected;

const connectDb = async () => {
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = db.connections[0].readyState;
    console.log("✅ MongoDB connected successfully.");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
};

export default connectDb;
