var express = require('express');
var router = express.Router();
const mysql = require("mysql");


let  client = mysql.createConnection({
  user: "root",
  password: "hhk1013!",
  database: "smart"
})

router.get('/', function(req, res, next) {
  client.query("SELECT * FROM image ORDER BY id DESC LIMIT 8", function(err, result, fields){
    if(err){

      console.log(err);
    }
    else{

      return res.render('recom', {

        results: result

      });

    }
  });
});

router.get('/re', function(req, res, next) {
  res.redirect('/');
});








module.exports = router;
