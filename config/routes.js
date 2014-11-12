var mongoose = require('mongoose');
var users = require('../app/routes/users');

module.exports = function (app, passport) {
  app.use('/users', users);

  // error handling
  app.use(function (err, req, res, next) {
    if (err.message) {
      console.error(err.stack);
      res.status(500).json({ error: err.stack });
    }
  });
};
