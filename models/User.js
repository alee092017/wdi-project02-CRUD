//checked

const db = require('../db/config');

const User = {};

//findByUserName Method
User.findByUserName = userName => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
    `, [userName]);
};

//create method
User.create = user => {
    return db.one(`
      INSERT INTO users
      (username, email, password_digest, firstname, lastname)
      VALUES ( $1, $2, $3, $4, $5)
      RETURNING *
      `, [user.username, user.email, user.password_digest, user.firstname, user.lastname]);
  };

  module.exports = User;
