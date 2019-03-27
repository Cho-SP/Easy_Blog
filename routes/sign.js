var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var gbdb = require('../gbdb');
/* GET home page. */
router.post('/',(req, res) =>{
  if(!req.body.signid || !req.body.pwd || !req.body.pwd_ck){
    res.send(`
      <script>
        alert('입력하지 않은 부분이 있습니다.');
        location.href="/signup";
      </script>
      `);
  }else if(req.body.pwd != req.body.pwd_ck){
      res.send(`
      <script>
      alert('비밀번호가 맞지 않습니다.');
      location.href="/signup";
      </script>
      `);
}else{
  var data = { signid: req.body.signid, pwd:req.body.pwd};
  gbdb.create(data, function(err, result){
    if(err) throw err;
    res.send(`
      <script>
        alert('정상적으로 등록되었습니다.');
        location.href="/signup";
      </script>
      `);
  });
}
});

module.exports = router;
