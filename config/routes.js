
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var home = require('../app/controllers/home');

/**
 * Expose
 */

module.exports = function (app, passport) {

  app.get('/', home.index);

  /**
   * Error handling
   */

  app.use(function (err, req, res, next) {
    // treat as 404
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).json({ error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404).json({
      url: req.originalUrl,
      error: 'Not found'
    });
  });

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/dist/index.html'));
  });
};
