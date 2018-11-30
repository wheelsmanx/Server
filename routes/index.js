var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //Pass global list with two hard coded values, and any added devices via http, as well as the current light state.
  res.render('index', { title: 'Express', list: global.list, light: global.light });
});

module.exports = router;
