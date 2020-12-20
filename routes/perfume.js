var express = require('express');
var router = express.Router();
const mysql = require("mysql");
var alert = require('alert');



let  client = mysql.createConnection({
  user: "root",
  password: "hhk1013!",
  database: "smart"
})
//향수 1 제어
router.get('/', function(req, res, next) {

    var on_off = req.body['on_off'];
    console.log(req.body);
     client.query('UPDATE  perfume SET on_off=\'' + '1' + '\' WHERE per_name =\''+'per_1'+'\' AND on_off IS NOT NULL'
     ,  function(err){
       if(!err){
         res.redirect("/users")
         alert('향수1 뿌리기 완료')
       }else{
        console.log(err)
       }

     });
});

//향수 2 제어
router.get('/perfume_1', function(req, res, next){
  var on_off = req.body['on_off'];
  console.log(req.body);

  client.query('UPDATE  perfume SET on_off=\'' + '2' + '\' WHERE per_name =\''+'per_2'+'\' AND on_off IS NOT NULL'
  ,  function(err){
    if(!err){
      res.redirect("/users")
      alert('향수2 뿌리기 완료')
    }else{
     console.log(err)
    }

  });
  });

//향수 3 제어
router.get('/perfume_2', function(req, res, next) {

    var on_off = req.body['on_off'];
    console.log(req.body);
     client.query('UPDATE  perfume SET on_off=\'' + '3' + '\' WHERE per_name =\''+'per_3'+'\' AND on_off IS NOT NULL'
     ,  function(err){
       if(!err){
         res.redirect("/users")
         alert('향수3 뿌리기 완료')
       }else{
        console.log(err)
       }

     });
});


module.exports = router;
