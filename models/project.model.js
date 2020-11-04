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

    appTools: {
      type: String,
    },

    appLogo: {
      type: String,
    },
    comments: {
      type: Array,
    },
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
