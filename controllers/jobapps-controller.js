const JobApp = require('../models/jobapps');

const jobappsController = {}

jobappsController.index = (req, res) => {
  JobApp.findAll()
  .then(jobapps => {
    res.render('jobapps/jobapps-index', {
      jobapps: jobapps,
      auth: (req.user) ? true : false,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

jobappsController.show = (req, res) =>{
  JobApp.findById(req.params.id)
  .then(jobapps => {
    res.render('jobapps/jobapps-show', {
      jobapps: jobapps,
      auth: (req.user) ? true : false,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};
jobappsController.create = (req, res) => {
  JobApp.create({
    status: req.body.status,
    company: req.body.company,
    jobtitle: req.body.jobtitle,
    linktoapp: req.body.linktoapp,
    datesubmitted: req.body.datesubmitted,
    followup: req.body.followup,
    intcontactname: req.body.intcontactname,
    intcontactemail: req.body.intcontactemail,
  }, req.user.id).then(jobapps => {
    res.redirect(`/jobapps/${jobapp.id}`);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

jobappsController.edit = (req, res) => {
  JobApp.findById(req.params.id)
  .the(jobapps => {
    res.render('jobapps/jobapps-edit', {
      jobapps: jobapps,
      auth: (req.user) ? true : false,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

jobappsController.update = (req, res) => {
  JobApp.update({
    status: req.body.status,
    company: req.body.company,
    jobtitle: req.body.jobtitle,
    linktoapp: req.body.linktoapp,
    datesubmitted: req.body.datesubmitted,
    followup: req.body.followup,
    intcontactname: req.body.intcontactname,
    intcontactemail: req.body.intcontactemail,
  }, req.user.id).then(jobapps => {
    res.redirect(`/jobapps/${jobapp.id}`);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

jobappsController.delete = (req, res) => {
  JobApp.destroy(req.params.id)
  .then(() => {
    res.redirect('/jobapps');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

jobappsController.complete = (req, res) => {
  JobApp.complete(req.params.id)
  .then(jobapps => {
    res.json({
      completed: true;
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      err:err,
      compelted: false,
    });
  });
};

module.export = jobappsController

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
