const express = require("express");
const { isLoggedIn } = require("../helpers/auth-helper");
const router = express.Router();

let CommentModel = require('../models/comments.model')

router.get('/comment/:projectId', isLoggedIn, (req, res) => {
  CommentModel.findById(req.params.projectId)
})


