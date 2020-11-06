const express = require('express')
const app = express()
const mongoose = require('mongoose')
//ensure database is connected
var path = require('path');
require('./config/dbconnect.config')
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
require("dotenv").config();



app.use(
  session({
    secret: 'mazas-tamsus',
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 60 * 60 * 24 * 1000,
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 60 * 60 * 24,
      autoRemove: 'disabled',
    }),
  })
);

const logger = require('morgan');
app.use(logger('dev'));

//ensuring that when working on local the browser and server can communicate with credentials
const cors = require('cors')
app.use(cors({
  credentials: true, 
  origin: ['http://localhost:3000']
}))

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()) //crucial for post requests from client


app.use(express.static(path.join(__dirname, 'public')));

const authRoutes = require('./routes/auth.routes');
app.use('/api', authRoutes);

const commentRoutes = require('./routes/comment.routes');
app.use('/api', commentRoutes);

const profileRoutes = require('./routes/profile.routes');
app.use('/api', profileRoutes);

const projectRoutes = require('./routes/project.routes');
app.use('/api', projectRoutes)

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT || 5000, '0.0.0.0', () => {
  console.log('Server is running')
})

module.exports = app