const express = require("express");
const { isLoggedIn } = require("../helpers/auth-helper");
const router = express.Router();

let ProjectModel = require("../models/project.model");


//view all projects
router.get('/project', (req,res) =>{
  ProjectModel.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong in get all projects",
        message: err,
      });
    });
});

//view project
router.get('/project/:id', (req,res) => {
  ProjectModel.findById(req.params.id)
  .then((response) => {
    res.status(200).json(response)
  })
  .catch((err) => {
    res.status(500).json({
      error: 'Something went wrong with get a project',
      message: err

    })
  })
})



//create project
router.post('/project/create', /*isLoggedIn,*/ (req, res) =>{
  const {appName, appDescription, appTools, deploymentLink, repoLink, appLogo, projectVersion} = req.body;
  const userRefId = req.session.loggedInUser._id //dont need id param, use session id. 

  
  ProjectModel.create({userRefId ,appName, appDescription, appTools, deploymentLink, repoLink, appLogo, projectVersion})
  .then((response) => {
    
    res.status(200).json(response)
  })
  .catch((err) => {
    res.status(500).json({
      error: 'Something went wrong with create project',
      message: err,

    })
  })
})

//edit your project
router.patch('/project/:id/edit', /*isLoggedIn,*/ (req, res) => {
  const {appName, appDescription, appTools, deploymentLink, repoLink, appLogo, projectVersion} = req.body;
  //const userRefId = req.session.loggedInUser._id
  const id = req.params.id //not sure which to use.  In postman, it will edit if you use the _id from mongo, but wont work with userRefId. So, not sure how I should be calling it. req body _id?

  ProjectModel.findByIdAndUpdate(id, {$set: {appName: appName, appDescription: appDescription, appTools: appTools, deploymentLink: deploymentLink, repoLink: repoLink, appLogo: appLogo, projectVersion: projectVersion}})
  .then((response) => {
    res.status(200).json(response)
  })
  .catch((err) => {
    res.status(500).json({
      error: 'Something went wrong with edit project',
      message: err,

    })
  })
})

module.exports = router