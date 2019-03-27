var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var gbdb = require('../gbdb');
/* GET home page. */
router.post('/',(req, res) =>{
  if(!req.body.name || !req.body.email || !req.body.password || !req.body.content){
    res.send(`
      <script>
        alert('입력하지 않은 부분이 있습니다.');
        location.href="/guestbookAdd";
      </script>
      `);
}else{
  var data = { name: req.body.name, email: req.body.email, password: req.body.password, content: req.body.content, living: req.body.living};
  gbdb.create(data, function(err, result){
    if(err) throw err;
    res.send(`
      <script>
        alert('정상적으로 등록되었습니다.');
        location.href="/guestbookAdd";
      </script>
      `);
  });
}
});

module.exports = router;
