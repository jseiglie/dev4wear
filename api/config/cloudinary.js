require("dotenv").config();
const cloudinary = require("cloudinary").v2

module.exports = new cloudinary.config({
    secure: true,
    cloud_name: "dev4wear"
  });

