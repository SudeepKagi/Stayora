const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Multer storage configuration
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'stayora_DEV',
    allowed_formats: ['png', 'jpg', 'jpeg'],
  },
});

module.exports = {
  cloudinary,
  storage,
};
