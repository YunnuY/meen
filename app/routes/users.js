var Status = require('http-status');
var express = require('express');
var users = require('../controllers/users');
var router = express.Router();

router.use(function(req, res, next) {
  console.log('routes/users.js:');
  next();
});

router.post('/', users.create);

module.exports = router;
