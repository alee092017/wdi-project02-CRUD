//import dependencies
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = ('method-override');
//need below for auth
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

//initialize app
const app = express();
//add dot env file for auth function
reqire('dotenv').config();

//middleware--go back and make sure you know line by line
//what's going on here.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
//middleware--auth
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// static files!!  this is not just index this your css & potentially other assets & things ie src
app.use(express.static(path.join(dirname, 'public')));

//views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//set the port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});


// app.get('/', (req, res) => {
//   res.render('index');
// });

//require routes here

app.use('*', (req,res) => {
  res.status(404).send('404 NOT FOUND');
});
