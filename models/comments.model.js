const {Schema, model} = require('mongoose')
let {flagList} = require('../lib/flagList')

const commentSchema = new Schema(
  {
    userRefId: {
      type: Schema.Types.ObjectId, 
      ref: 'User'
    },
    commentBody: {
      type: String,
    },
    commentFlag: {
      type: String,
      enum: [...flagList]
    },
    replies:[{
      type: Object,
    }],
    creatorCheck: {
      type: Boolean
    },
    projectVersion: {
      type: String
    },
    //Does the user is version commenting on go in this model? Added project version to project model. 
    //Yes Ross it goes here
  },

  {
    timestamps: true,
  }
)

module.exports = model('Comment', commentSchema)
