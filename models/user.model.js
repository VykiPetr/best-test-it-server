const {Schema, model} = require('mongoose')

const userSchema = new Schema(
  {
    username: {
    type: String,
    required: [true, 'Please enter a username']
    },
    email: {
      type: String, 
      required: [true, 'Please enter your email']
    }, 
    passwordHash: {
      type: String, 
      required: true,
    }, 
    aboutMe: {
      String,
    },
    mySkills: {
      String,

    },
    userImage: {
      type: String,
    },
    projects: [{
      type: Schema.Types.ObjectId, 
      ref: 'Project'
    }],
  },
  {
    timestamps: true,
  }
);

userSchema.index({'username': 1}, {unique:true});
userSchema.index({'email': 1}, {unique:true});

module.exports = model('User', userSchema)

