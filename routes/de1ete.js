var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var gbdb = require('../gbdb');

router.post('/:id', function(req, res) {
    gbdb.findOne({_id : req.params.id }, function(err, items) {
        if( items.password === req.body.delpw) {
            gbdb.remove({_id : req.params.id }, function(err) {
                if(err) {
                    throw err;
                } else {
                    res.send(`<script>alert('정상적으로 삭제되었습니다.');location.href='/read'</script>`)
                }
            });
        } else {
            res.send(`<script>alert('비밀번호가 틀렸습니다.');location.href='/read'</script>`)
        }
    });
});

module.exports = router;