const express = require("express");
const { isLoggedIn } = require("../helpers/auth-helper");
const router = express.Router();

let UserModel = require("../models/user.model");


//view profile
router.get('/profile/:id', isLoggedIn, (req, res) => {
  UserModel.findById(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong in get profile",
        message: err,
      });
    });
});


//edit your profile
router.post('/profile/:id', isLoggedIn, (req, res) => {
  let id = req.params.id
  const {aboutMe, mySkills, userImage} = req.body; 
  UserModel.findByIdAndUpdate(id, {set: {aboutMe: aboutMe, mySkills: mySkills, userImage: userImage}})
  .then((response) => {
    res.status(200).json(response)
  })
  .catch((err) => {
    res.status(500).json({
      error:'Something went wrong with edit profile', 
      message: err,
    })
  })
})


module.exports = router