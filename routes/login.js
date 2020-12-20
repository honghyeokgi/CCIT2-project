var express = require('express');
var router = express.Router();
const mysql = require("mysql");


let  client = mysql.createConnection({
  user: "root",
  password: "hhk1013!",
  database: "smart"
})

router.get('/', function(req, res, next) {
  res.render('login' );
});


router.post('/', function (req, res, next) {
    var userId = req.body['userId'];
    var userPw = req.body['userPw'];
    client.query('select * from sign where id=\'' + userId + '\' and pw=\'' + userPw + '\'', function (err, rows, fields) {
        if (!err) {
            if (rows[0]!=undefined) {
               return res.redirect("/users");
            } else {
               return res.redirect("/login");

            }

        } else {
          return  res.send('error : ' + err);

        }
    });
});

module.exports = router;
