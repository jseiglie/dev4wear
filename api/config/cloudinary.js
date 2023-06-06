require("dotenv").config();
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.NODE_ENV_CLOUDINARY_NAME,
  api_key: process.env.NODE_ENV_CLOUDINARY_API_KEY,
  api_secret: process.env.NODE_ENV_CLOUDINARY_API_SECRET,
  secure: true,
});

module.exports = { cloudinary };
