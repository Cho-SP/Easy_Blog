var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var gbdb = require('../gbdb');
/* GET home page. */
router.get('/', function(req, res, next) {
  gbdb.find({}, (err, result) =>{
    if(err) throw err;
  res.render('read', { title: 'Express', gb: result });
});
});

module.exports = router;
