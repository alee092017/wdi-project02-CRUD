

//for auth--do this after your regular controllers are writtten
// flashcardsController.create = (req, res) => {
//   Flashcard.create({
//     question: req.body.question,
//     answer: req.body.answer,
//     category: req.body.category,
//     difficulty: req.body.difficulty,
//   }, req.user.id).then(flashcard => {
//     res.redirect(`/flashcards/${flashcard.id}`)
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json({error: err});
//   });
// };
