var express = require('express');
var router = express.Router();
const mysql = require("mysql");


let  client = mysql.createConnection({
  user: "root",
  password: "hhk1013!",
  database: "smart"
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



//all system comunication
router.get('/all', function(req, res, next) {
                  client.query('SELECT system,on_off FROM system WHERE system = \''+'all'+'\' '
        , function(err, user, fields) {
                if(!err) {
                  res.json({user});
                } else {
                  console.log("err : " + err);
                  res.send(err);
                }
              });
            });

router.post('/all', function(req, res, next){
 var on_off = req.body['on_off'];
 console.log(req.body);

    client.query('update system set on_off= \''+ on_off + '\' where system=\''+'all'+'\' and on_off is not null'
  , function(err){
    if(!err){
      res.send(true)
    }else{
      console.log(err)
    }
  });
});
// moving hanger & dry 통신
router.get('/dry', function(req, res, next) {
                  client.query('SELECT system,on_off FROM system WHERE system = \''+'dry'+'\' '
        , function(err, user, fields) {
                if(!err) {
                  res.json({user});
                } else {
                  console.log("err : " + err);
                  res.send(err);
                }
              });
            });

  router.get('/dryfan', function(req, res, next) {
      client.query('update system set on_off=\''+ '1' + '\' WHERE system = \''+'dry'+'\' and on_off is not null;'
          , function(err, user, fields) {
              if(!err) {
              res.redirect('users')
            } else {
                console.log("err : " + err);
                res.send(err);
                  }
                });
              });

router.post('/dry', function(req, res, next){
 var on_off = req.body['on_off'];
 console.log(req.body);

    client.query('update system set on_off= \''+ on_off + '\' where system=\''+'dry'+'\' and on_off is not null'
  , function(err){
    if(!err){
      res.send(true)
    }else{
      console.log(err)
    }
  });
});

router.get('/uvc', function(req, res, next) {
                  client.query('SELECT time FROM uv  '
        , function(err, user, fields) {
                if(!err) {
                  res.json({user});
                } else {
                  console.log("err : " + err);
                  res.send(err);
                }
              });
            });















// UV램프 on_off 상태 값
router.get('/uvlamp', function(req, res, next) {
               client.query('SELECT time FROM uv'
           , function(err, user, fields) {
                   if(!err) {
                     res.json({user});
                   } else {
                     console.log("err : " + err);
                     res.send(err);
                   }
                 });
               });

router.post('/uvlamp', function(req, res, next) {

     var time = req.body['time'];
     console.log(req.body);
          client.query('UPDATE  uv SET time=\'' + time + '\' WHERE time IS NOT NULL'
    ,  function(err){
          if(!err){
                      res.send(true)
          }else{
                      console.log(err)
                }

                    });
                   })




//향수 제어 통신
router.post('/perfumestate', function(req, res, next) {

  var on_off = req.body['on_off'];
  console.log(req.body);
     client.query('UPDATE  perfume SET on_off=\'' + on_off + '\' WHERE per_name =\''+'per_1'+'\' AND on_off IS NOT NULL'
   , function(err){
        if(!err){
            res.send(true)
      }else{
        console.log(err)
      }

           });
      });

router.post('/perfumestate2', function(req, res, next) {

  var on_off = req.body['on_off'];
  console.log(req.body);
     client.query('UPDATE  perfume SET on_off=\'' + on_off + '\' WHERE per_name =\''+'per_2'+'\' AND on_off IS NOT NULL'
   , function(err){
        if(!err){
              res.send(true)
      }else{
        console.log(err)
      }

           });
      });
router.post('/perfumestate3', function(req, res, next) {

    var on_off = req.body['on_off'];
    console.log(req.body);
        client.query('UPDATE  perfume SET on_off=\'' + on_off + '\' WHERE per_name =\''+'per_3'+'\' AND on_off IS NOT NULL'
      , function(err){
          if(!err){
              res.send(true)
          }else{
            console.log(err)
        }

              });
        });
// 향수 상태값
// 향수_1
router.get('/perfumestate', function(req, res, next) {
                  client.query('SELECT  per_name,on_off FROM perfume WHERE per_name = \''+'per_1'+'\' '
              , function(err, user, fields) {
                      if(!err) {
                        res.json({user});
                      } else {
                        console.log("err : " + err);
                        res.send(err);
                      }
                    });
                  });
// 향수_2
router.get('/perfumestate2', function(req, res, next) {
                client.query('SELECT  per_name,on_off FROM perfume WHERE per_name = \''+'per_2'+'\' '
            , function(err, user, fields) {
                    if(!err) {
                      res.json({user});
                    } else {
                      console.log("err : " + err);
                      res.send(err);
                    }
                  });
                });
// 향수_3
router.get('/perfumestate3', function(req, res, next) {
                client.query('SELECT  per_name,on_off FROM perfume WHERE per_name = \''+'per_3'+'\' '
            , function(err, user, fields) {
                    if(!err) {
                      res.json({user});
                    } else {
                      console.log("err : " + err);
                      res.send(err);
                    }
                  });
                });






module.exports = router;
