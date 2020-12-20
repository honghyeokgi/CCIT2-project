var express = require('express');
var router = express.Router();
const mysql = require("mysql");

let  client = mysql.createConnection({
  user: "root",
  password: "hhk1013!",
  database: "smart",
  dateStrings:'day'
})

router.get('/', function(req, res, next) {
  client.query("SELECT * FROM clothes;", function(err, result, fields){
    if(err){

      console.log("쿼리문에 오류가 있습니다.");
    }
    else{
      return res.render('case', {

        results: result

      });

    }
  });
});







module.exports = router;
