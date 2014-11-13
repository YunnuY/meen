var utils = require('../../lib/utils');
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.load = function (req, res, next, id) {
  var options = {
    criteria: { _id : id }
  };
  User.load(options, function (err, user) {
    if (err) return next(err);
    if (!user) return next(new Error('Failed to load User ' + id));
    req.profile = user;
    next();
  });
};

exports.create = function (req, res) {
  var user = new User(req.body.user);
  user.provider = 'local';
  user.save(function (err) {
    if (err) {
      return res.json({
        error: utils.errors(err.errors),
        user: user,
        title: 'Sign up'
      });
    }
    return res.status(201).json(req.body);
  });
};

exports.show = function (req, res) {
  var user = req.profile;
  res.json({
    title: user.name,
    user: user
  });
};

exports.signin = function (req, res) {};

exports.authCallback = login;

exports.session = login;

function login (req, res) {
  var redirectTo = req.session.returnTo ? req.session.returnTo : '/';
  delete req.session.returnTo;
  res.redirect(redirectTo);
};
