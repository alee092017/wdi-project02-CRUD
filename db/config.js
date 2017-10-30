//checked.

const options = {
  query: (e) => {
    console.log(e.query);
  }
};

const pgp = require('pg-promise')(options);

function setDb() {
  if (process.env.NODE_ENV === 'development' || !process.env.Node_Env) {
      return pgp({
        database: 'tc_tracker_dev',
        port: 5432,
        host: 'localhost',
      });
  } else if (process.env.NODE.ENV === 'production') {
    return pgp(process.env.DATABASE_URL);
  }
}

const db = setDb();

module.exports = db; //why isn't this setDb??
