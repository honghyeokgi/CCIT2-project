var express = require('express');
var router = express.Router();
const mysql = require("mysql");
var alert = require('alert');



let  client = mysql.createConnection({
  user: "root",
  password: "hhk1013!",
  database: "smart"
})

router.get('/', function(req, res, next) {
  res.render('uv' );
});




router.post('/', function(req, res, next) {

    var time = req.body['time'];
    console.log(req.body);
     client.query('UPDATE  uv SET time=\'' + time + '\' WHERE time IS NOT NULL'
     ,  function(err){
       if(!err){
         res.redirect("/users")
          alert('정상 처리되었습니다.')
       }else{
        console.log(err)
       }

     });
});

// router.post('/other', function(req, res, next) {
//         // do something more
//
// 	res.send('<script type="text/javascript">alert("정상 처리되었습니다.");</script>');
// });

module.exports = router;
