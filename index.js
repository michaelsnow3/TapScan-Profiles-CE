var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ping', function(req, res, next) {
  res.json('index', { status: 'Online' });
});

module.exports = router;
