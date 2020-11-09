const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// IF CLOUDINARY DOESNT WORK IS BECUASE WE FORGOT THIS PART EXISTS
cloudinary.config({
  cloud_name: 'dazj6qkcj',
  api_key: '815647894937816',
  api_secret: 'gskIjYbNBzn4qMhm3UrC9aAZfvU'
});

const storage = new CloudinaryStorage({
  cloudinary,
  folder: 'bestTestIt-images',
  allowedFormats: ['jpg', 'png'],
  filename: function (req, res, cb) {
    cb(null, res.originalname);
  }
});

module.exports = multer({ storage })