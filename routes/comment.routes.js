const express = require("express");
const { isLoggedIn } = require("../helpers/auth-helper");
const router = express.Router();

let CommentModel = require('../models/comments.model')
let ProjectModel = require('../models/project.model')



router.get('/comment/:projectId', isLoggedIn, (req, res) => {
  CommentModel.findById(req.params.projectId)
  .then((response) => {
    res.status(200).json(response);
  })
  .catch((err) => {
    res.status(500).json({
      error: 'Something went wrong with view comment',
      message: err
    })
  })
})


router.post('/comment/:projectId', isLoggedIn, (req,res) => {
  let projectId = req.params.projectId
  const {userRefId, commentBody, commentFlag, creatorCheck, projectVersion} 
  = req.body

  CommentModel.create({userRefId, commentBody, commentFlag, creatorCheck, projectVersion})
  .then((response) => {
    let commentId = response._id
    res.status(200).json(response)
    ProjectModel.findByIdAndUpdate(projectId, {$push: {comments: commentId}})
    .then(() => {
      res.status(200).json({
        message: 'Comment added'
      })
    })
  })
  .catch((err) => {
    res.status(500).json({
      error: 'Something went wrong with create comment',
      message: err
    })
  })
})

router.delete('/comment/:commentId', isLoggedIn, (req, res) => {
  let commentId = req.params.commentId
  let loggedInUserId = req.session.loggedInUser._id

  CommentModel.findById(commentId)
  .then((response) => {
    if (response.userRefId == loggedInUserId){
      CommentModel.findByIdAndDelete(commentId)
      .then(() => {
        res.status(200).json({
          message: 'Comment deleted successfully'
        })
      
      })
      .catch((err) => {
        res.status(500).json({
          error: 'You cannot delete this comment',
          message: err
        })
      })
    }
  })



})




module.exports = router