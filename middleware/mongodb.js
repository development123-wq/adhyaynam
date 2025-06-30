import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://development:Akash%40123@cluster0.1hoarf8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//const MONGODB_URI = "mongodb+srv://hitesh:QWdPRZ2LiXHVx8aD@cluster0.h16vtk6.mongodb.net/?retryWrites=true&w=majority"; //this is project0 id and password (for test)

const connectDb = async () => {
    if (mongoose.connections[0].readyState) {
        return;
    }

    await mongoose.connect(MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
};

export default connectDb;

