var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send({
    users: [{
      id: 1,
      name: 'user1'
    }, {
      id: 2,
      name: 'user2'
    }]
  });
});

module.exports = router;
