//checked, syntax correct, order correct, references correct.

const bcrypt = require('bcryptjs');
const User = require('../models/User.js'); //error User.js not capitalized.  also js not necessary

const usersController = {};

usersController.index = (req, res) => {
  res.json({
    message: 'Put a user profile page on this route',
    data: {
      user: req.user,
    },
  });
};

usersController.create = (req, res) => {
  // ---->IS THIS S/B (req, res, option)<----
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/user');
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
}

module.exports = usersController;
