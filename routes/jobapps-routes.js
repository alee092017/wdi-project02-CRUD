


//to ensure that the user can't make changes w/o being logged in (add, edit, or delete w/o being logged in)--do this after you've written the normal routes

// flashcardRoutes.get('/', flashcardsController.index);
// flashcardRoutes.post('/', authHelpers.loginRequired, flashcardsController.create);

// flashcardRoutes.get('/add', authHelpers.loginRequired, (req, res) => {
//   res.render('flashcards/flashcards-new');
// });

// flashcardRoutes.get('/:id', flashcardsController.show);
// flashcardRoutes.get('/:id/edit', authHelpers.loginRequired, flashcardsController.edit);
// flashcardRoutes.put('/:id', authHelpers.loginRequired, flashcardsController.update);
// flashcardRoutes.delete('/:id', authHelpers.loginRequired, flashcardsController.delete);
