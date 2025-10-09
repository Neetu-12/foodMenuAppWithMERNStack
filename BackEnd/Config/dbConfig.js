import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try { // "mongodb://localhost:27017/foodMenuDeliveryApp"
    const conn = await mongoose.connect(process.env.MONGO_URI); //process.env.MONGO_URI
    console.log(`MongoDB Connected: ${conn.connection.host} ${process.env.MONGO_URI}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // stop app if DB fails
  }
};

export default connectDB;
