
/**
 * Module dependencies.
 */
var path = require('path');
var express = require('express');
var session = require('express-session');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');

var mongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
var env = require('./enviroment.js');
var pkg = require('../package.json');

/**
 * Expose
 */

module.exports = function (app, passport) {
  // Static files middleware
  app.use(express.static(path.join(__dirname, '../public/dist')));
  app.use(function (req, res, next) {
    if(!req.is('json')) {
      res.sendFile(path.join(__dirname, '../public/dist/index.html'));
    } else {
      next();
    }
  });

  app.use(morgan('dev'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // cookieParser should be above session
  app.use(cookieParser());
  app.use(cookieSession({ secret: 'secret' }));

  app.use(session({
    secret: pkg.name,
    store: new mongoStore({
      url: env.db,
      collection : 'sessions'
    }),
    saveUninitialized: true,
    resave: true
  }));

  // use passport session
  app.use(passport.initialize());
  app.use(passport.session());

  // connect flash for flash messages - should be declared after sessions
  app.use(flash());
};

