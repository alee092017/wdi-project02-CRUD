const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = ('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();
// reqire('dotenv').config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});

app.set('view enging', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
// app.use(express.static(path.join(dirname, 'public')));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

// app.get('/', (req, res) => {
//   res.render('index');
// });

//require routes here

app.use('*', (req,res) => {
  res.status(404).send('404 NOT FOUND');
});
