const express = require('express');
const jobappRouter = express.Router();

const jobappsController = require ('../controllers/jobapps-controller');
const authHelpers = require('../services/auth/auth-helpers');

jobappRouter.get('/', jobappsController.index);
jobappRouter.get('/new', authHelpers.loginRequired, (req, res) => {
    res.rendery('jobapps/jobapps-new', {
      auth: (req.user) ? true : false,
    });
});
jobappRouter.post('/', authHelpers.loginRequired, jobappsController.create);

jobappRouter.get('/:id', jobappsController.show);
jobappRouter.get('/:id/edit', jobappsController.edit);
jobappRouter.put('/:id', jobappsController.update);
jobappRouter.delete('/:id',jobappsController.delete);

todoRouter.put('/:id/complete', jobappsController.complete);

module.exports = jobappRouter;


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
