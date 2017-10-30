

//this is for auth--adding user id to the create function--do this after your regular model is done
// Flashcard.create = (flashcard, userid) => {
//   return db.one(
//     `INSERT INTO flashcards
//     (question, answer, category, difficulty, user_id)
//     VALUES ($1, $2, $3, $4, $5)
//     RETURNING *`, [flashcard.question, flashcard.answer, flashcard.category, flashcard.difficulty, userid]);
// }
