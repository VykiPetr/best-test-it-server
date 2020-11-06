const {Schema, model} = require('mongoose')

const userProjectSchema = new Schema(
  {
    userRefId: {
      type: Schema.Types.ObjectId, 
      ref: 'User'
    },
    appName: {
      type: String, 
      required: true,
    },
    appDescription: {
      type: String, 
    },
    appTools: [{
      type: String,
      //enum
    }],
    deploymentLink: {
      type: String,
    },
    repoLink: {
      type: String,
    },
    appLogo: {
      type: String,
    },
    comments: [{
      type: Schema.Types.ObjectId, 
      ref: 'Comment'    //reffrencing the comments from their project id in the comment model
    }],
    likes: [{
      type: Schema.Types.ObjectId, 
      ref: 'User'
    }],
    projectVersion: {
      type: String,
    }
  }
)

//Should App tools be split into languages, frameworks, libraries etc?

userProjectSchema.index({'appName': 1}, {unique:true});

module.exports = model('Project', userProjectSchema)
