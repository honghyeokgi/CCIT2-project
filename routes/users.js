var express = require('express');
var router = express.Router();
const mysql = require("mysql");


let  client = mysql.createConnection({
  user: "root",
  password: "hhk1013!",
  database: "smart"
})

router.get('/', function(req, res, next) {
  res.render('users' );
});




// all system management
router.get('/all', function(req, res, next){
  var on_off = req.body['on_off'];
  console.log(req.body);

  client.query('update system set on_off= \''+'1'+'\' where name= \''+'all'+'\' on_off is not null'
, function(err){
  if(!err){
    res.redirect("/users")
  }else{
    console.log(err)
  }
});
});
//Moving Hanger & Dry system
router.get('/dry', function(req, res, next){
  var on_off = req.body['on_off'];
  console.log(req.body);

  client.query('update system set on_off= \''+'1'+'\' where name= \''+'dry'+'\' and on_off is not null'
, function(err){
  if(!err){
    res.redirect("/users")
  }else{
    console.log(err)
  }
});
});



module.exports = router;
