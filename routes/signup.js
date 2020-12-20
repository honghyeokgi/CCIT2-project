var express = require('express');
var router = express.Router();
const mysql = require("mysql");


let  client = mysql.createConnection({
  user: "root",
  password: "hhk1013!",
  database: "smart"
})

router.get('/', function(req, res, next) {
  res.render('signup' );
});

router.post('/', function (req, res, next) {

    var userId = req.body['userId'];
    var userPw = req.body['userPw'];
    var userPwRe = req.body['userPwRe'];
    var body = req.body;
   console.log(body);
    if (userPw == userPwRe) {
        client.query('insert into sign values(?,?)', [userId, userPw], function (err, rows, fields) {
            if (!err) {
               return res.redirect("login");
              return  res.send('success');
            } else {
              return  res.send('err : ' + err);
            }
        });
    }else{
      return  res.send('password not match!');
    }
});


module.exports = router;
