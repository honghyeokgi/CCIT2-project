var express = require('express');
var router = express.Router();
const mysql = require("mysql");

let  client = mysql.createConnection({
  user: "root",
  password: "hhk1013!",
  database: "smart"
})

router.get('/', function(req, res, next,) {

  res.render('season');

});



  router.get('/season_1', function(req, res, next) {

    var body = req.body;
    console.log(body);
    client.query('UPDATE recomand SET on_off =\''+'1'+'\', season = \''+'10,13,15,17'+'\' where on_off IS  NULL;', [
      body.season,body.on_off
    ]
    , function(){
      res.redirect("/recom");
    });
    });
  router.get('/season_2', function(req, res, next) {

    var body = req.body;
     console.log(body);
     client.query('UPDATE recomand SET on_off =\''+'1'+'\', season = \''+'11,12,15,17'+'\' where on_off IS  NULL;', [
       body.season,body.on_off
     ]
     , function(){
        res.redirect("/recom");
     });
     });

  router.get('/season_3', function(req, res, next) {

  var body = req.body;
    console.log(body);
    client.query('UPDATE recomand SET on_off =\''+'1'+'\', season = \''+'11,13,14,17'+'\' where on_off IS  NULL;', [
     body.season,body.on_off
    ]
    , function(){
     res.redirect("/recom");

    });
    });

  router.get('/season_4', function(req, res, next) {

  var body = req.body;
    console.log(body);
    client.query('UPDATE recomand SET on_off =\''+'1'+'\', season = \''+'11,13,15,16'+'\' where on_off IS  NULL;', [
      body.season,body.on_off
    ]
    ,function(){
       res.redirect("/recom");
    });
    });


    

    // router.get('/a', function(req, res, next) {
    //
    // var body = req.body;
    //   console.log(body);
    //   client.query('SELECT * FROM recomand ORDER BY on_off  LIMIT 1;', [
    //     body.season,body.on_off
    //   ]
    //   ,function(){
    //     if(body.on_off == '0')
    //      return res.redirect("/recom");
    //   });
    //   });





module.exports = router;
