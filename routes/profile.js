var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var gbdb = require('../gbdb');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profile', { title: 'Express' });
});

module.exports = router;
