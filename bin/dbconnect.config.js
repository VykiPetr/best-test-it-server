const mongoose = require('mongoose');

//Here we are connecting to our database

let configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}

let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/BestTestIt'

mongoose.connect(MONGODB_URI, configOptions)
  .then(() => {
    console.log('Databse is connected boys, we may proceed')
  })
  .catch(() => {
    console.log('Something went wrong! Check db configurations and files!')
  })