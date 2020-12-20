var express = require('express');
var router = express.Router();
const mysql = require("mysql");


let  client = mysql.createConnection({
  user: "root",
  password: "hhk1013!",
  database: "smart"
})

router.get('/', function(req, res, next) {
  res.render('clo');
});



router.post('/cls', function(req, res, next) {

  var on_off = req.body['on_off'];
  console.log(req.body);
     client.query('UPDATE  recomand SET on_off=\'' + on_off + '\' WHERE on_off =\''+'1'+'\' AND on_off IS NOT NULL'
   , function(err){
        if(!err){
            res.redirect("/recom")
      }else{
        console.log(err)
      }

           });
      });


  router.get('/clo1', function(req, res, next) {

    var body = req.body;
    console.log(body);
    client.query("INSERT INTO recomand (jender) VALUES (8);", [
      body.jender
    ]
    , function(err){
      if(!err){
      res.redirect("/season");
    }else{
      console.log(err)
    }

    });
    });
  router.get('/clo2', function(req, res, next) {

    var body = req.body;
     console.log(body);
     client.query("INSERT INTO recomand (jender) VALUES (9);", [
       body.jender
     ]
     , function(err){
       if(!err){
       res.redirect("/season");
     }else{
       console.log(err)
     }
     });
     });

     router.get('/cls', function(req, res, next) {

       client.query(" SELECT jender, season, on_off FROM recomand ORDER BY id DESC LIMIT 1;", function(err,user , fields) {
        if(!err) {
          res.json({user});
        } else {
          console.log("err : " + err);
          res.send(err);
        }
      });
    });

    router.post('/cls1', function(req, res, next) {

      var body = req.body;
       console.log(body);
       client.query("INSERT INTO image (src) VALUES (?);", [
         body.src
       ]
       , function(err){
         if(!err){
         res.redirect("/recom");
       }else{
         console.log(err)
       }
       });
       });


module.exports = router;
