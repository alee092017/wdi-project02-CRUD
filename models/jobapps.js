const db = require('..db/config');

const Jobapps = {}

Jobapps.findAll = () => {
  return db.manyOrNone('SELECT * FROM jobapps ORDER by id ASC');
};

Jobapps.findById = (id) => {
  return db.one(` SELECT * FROM jobapps
    WHERE id = $1
    `, [id]);
};

Jobapps.create = (jobapp, userId) => {
  return db.one(`
    INSERT INTO jobapps
    (status, company, title, linktoapp, datesubmitted, followup, intcontactname, intcontactemail, notes, id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `, [jobapp.status, jobapp.company, jobapp.jobtitle, jobapp.linktoapp, jobapp.datesubmitted, jobapp.followup, jobapp.intcontactname, jobapp.intcontactemail, jobapp.notes, id]);
};

//is the syntax for user_id and userId correct??

Jobapps.update = (jobapp, userId) => {
  return db.one(`
    UPDATE jobapps SET
    status = $1,
    company = $2,
    jobtitle = $3,
    linktoapp = $4,
    datesubmitted = $5,
    followup = $6,
    intcontactname = $7,
    intcontactemail = $8,
    notes = $9,
    WHERE id = $10
    RETURNING *
    `, [jobapp.status, jobapp.company, jobapp.jobtitle, jobapp.linktoapp, jobapp.datesubmitted, jobapp.followup, jobapp.intcontactname, jobapp.intcontactemail, jobapp.notes, id]
    );
    }

    Todo.destroy = (id) => {
  return db.none(`
    DELETE FROM jobapps
    WHERE id = $1
  `, [id]);
};

Todo.complete = (id) => {
  return db.one(`
    UPDATE jobapps SET
    completion = true
    WHERE id = $1
    RETURNING *
  `, [id]);
};

module.exports = Todo;

//this is for auth--adding user id to the create function--do this after your regular model is done
// Flashcard.create = (flashcard, userid) => {
//   return db.one(
//     `INSERT INTO flashcards
//     (question, answer, category, difficulty, user_id)
//     VALUES ($1, $2, $3, $4, $5)
//     RETURNING *`, [flashcard.question, flashcard.answer, flashcard.category, flashcard.difficulty, userid]);
// }
