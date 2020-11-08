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
      type: String,
    },
    mySkills: {
      type: String,
    },
    userImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.index({'username': 1}, {unique:true});
userSchema.index({'email': 1}, {unique:true});

module.exports = model('User', userSchema)

