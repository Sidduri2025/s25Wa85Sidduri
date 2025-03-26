var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  let value1 = Math.cbrt(x);
  let result = Math.floor(value1);
  res.send(`f${value1} is ${result}`);
});

module.exports = router;