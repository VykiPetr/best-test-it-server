const express = require("express");
const { isLoggedIn } = require("../helpers/auth-helper");
const router = express.Router();

let CommentModel = require('../models/comments.model')
let ProjectModel = require('../models/project.model')


//getting comments from the Project model

router.get('/comments/:projectId', isLoggedIn, (req, res) => {
  
  ProjectModel.findById(req.params.projectId)
  .populate({ 
    path: 'comments',
    populate: {
      path: 'userRefId',
      model: 'User'
    } 
 })
  .then((response) => {
    // let populatedResponse = response.comments.map((comment)=>{
    //   return comment.populate('userRefId')
    // })
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
  const {commentBody, commentFlag, creatorCheck, projectVersion} 
  = req.body
  const userRefId = req.session.loggedInUser._id
  

  CommentModel.create({userRefId, commentBody, commentFlag, creatorCheck, projectVersion})
  .then((response) => {
    console.log('create comment response', response)
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
  console.log('this is the comment id', commentId)
  console.log('logged in user id', loggedInUserId)
  

  CommentModel.findById(commentId)
  .then((response) => {
    //this if statement triggers if user downt match comment author. 
    if (response.userRefId !== loggedInUserId){
      res.status(500).json({
                error: 'You do not have permission to delete this message',
           })
      return;
    }
    console.log('find comment by id response', response)
    if (response.userRefId == loggedInUserId){
      CommentModel.findByIdAndDelete(commentId)
      .then(() => {
        res.status(200).json({
          message: 'Comment deleted successfully'
        })
      
      })

      //this catch doesnt seem to trigger if the user didnt create the message.  Find comment response = null.
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