const express = require('express')
const router = express.Router()
const uploader = require('../config/cloudindary.config')

router.post('/image-upload', uploader.single("imageUrl"), (req, res, next) => {
  if (!req.file){
    next(new Error('No file uploaded!'));
    return;
  }
  console.log(req.file.path)
  res.json({userImage: req.file.path})
})

router.post('/logo-upload', uploader.single("logoUrl"), (req, res, next) => {
  if (!req.file){
    next(new Error('No file uploaded!'));
    return;
  }
  res.json({appLogo: req.file.path})
})

module.exports = router