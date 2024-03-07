const cloudinary = require("cloudinary").v2;
// require("dotenv").config()
const cloud = cloudinary.config({
    cloud_name: process.env.CLOUD_NAME || "dpcwnul8m",
    api_key: process.env.CLOUDINERY_API_KEY || 411965836464963,
    api_secret: process.env.CLOUDINERY_SECREAT_KEY || "AL-7hKRkjEOXQiXRbstXiRKcsIg",
    secure: true
})

module.exports = cloudinary;