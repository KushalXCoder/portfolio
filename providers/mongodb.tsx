import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${MONGODB_URI}`);
        console.log("MongoDB connected:", connection.connection.host);
        console.log("Connected DB:", mongoose.connection.name);
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
}