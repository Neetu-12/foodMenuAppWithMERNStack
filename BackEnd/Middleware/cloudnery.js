import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config(); // load environment variables

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || "dpcwnul8m",
  api_key: process.env.CLOUDINARY_API_KEY || "411965836464963",
  api_secret: process.env.CLOUDINARY_SECRET_KEY || "AL-7hKRkjEOXQiXRbstXiRKcsIg",
  secure: true
});

export default cloudinary; // ES Module export