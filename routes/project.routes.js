const express = require("express");
const { isLoggedIn } = require("../helpers/auth-helper");
const router = express.Router();

let ProjectModel = require("../models/project.model");


//view all projects
router.get('/project', isLoggedIn, (req,res) =>{
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
router.get('/project/:id', isLoggedIn, (req,res) => {
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
router.post('project/:id/create', isLoggedIn, (req, res) =>{
  const {appName, appDescription, appTools, deploymentLink, repoLink, appLogo, projectVersion} = req.body;
  const userRefId = req.params.id
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
router.patch('project/:id/edit', isLoggedIn, (req, res) => {
  let id = req.params.id
  const {appName, appDescription, appTools, deploymentLink, repoLink, appLogo, projectVersion} = req.body;

  ProjectModel.findByIdAndUpdate(id, {set: {appName: appName, appDescription: appDescription, appTools: appTools, deploymentLink: deploymentLink, repoLink: repoLink, appLogo: appLogo, projectVersion: projectVersion}})
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