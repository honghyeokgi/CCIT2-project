var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var scriptRouter = require('./routes/script');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var perfumeRouter = require('./routes/perfume');
var uvRouter = require('./routes/uv');
var cloRouter = require('./routes/clo');
var seasonRouter = require('./routes/season');
var caseRouter = require('./routes/case');
var insertRouter = require('./routes/insert');
var recomRouter = require('./routes/recom');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname+'/public'))
app.use('/js', express.static(__dirname + '/js')); // redirect bootstrap JS
app.use('/css', express.static(__dirname + '/css')); // redirect CSS bootstrap
app.use('/assets/img', express.static(__dirname + '/assets/img'));
app.use('/assets/img/portfolio', express.static(__dirname + '/assets/img/portfolio'));
app.use('/assets/img/portfolio/fullsize', express.static(__dirname + '/assets/img/portfolio/fullsize'));
app.use('/assets/img/portfolio/thumbnails', express.static(__dirname + '/assets/img/portfolio/thumbnails'));
app.use('/uploads/images', express.static(__dirname+ '/uploads/images'));
app.use('C:\Users\gurrl\PycharmProjects\pythonProject', express.static(__dirname+ 'C:\Users\gurrl\PycharmProjects\pythonProject'));
// app.use('C:\Users\gurrl\project\project\uploads\3', express.static(__dirname+ 'C:\Users\gurrl\project\project\uploads\3'));
// app.use('c/users/gurrl/project/project/uploads/3', express.static(__dirname+ 'c/users/gurrl/project/project/uploads/3'));
// app.use('C:\Users\gurrl\Project\project\uploads\3', express.static(__dirname+ 'C:\Users\gurrl\Projects\Project\uploads\3'));
app.use('/uploads/0', express.static(__dirname+ '/uploads/0'));
app.use('/uploads/1', express.static(__dirname+ '/uploads/1'));
app.use('/uploads/2', express.static(__dirname+ '/uploads/2'));
app.use('/uploads/3', express.static(__dirname+ '/uploads/3'));
app.use('/uploads/4', express.static(__dirname+ '/uploads/4'));
app.use('/uploads/5', express.static(__dirname+ '/uploads/5'));
app.use('/uploads/6', express.static(__dirname+ '/uploads/6'));
app.use('/uploads/7', express.static(__dirname+ '/uploads/7'));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/script',scriptRouter);
app.use('/Login', loginRouter);
app.use('/Signup', signupRouter);
app.use('/perfume', perfumeRouter);
app.use('/uv', uvRouter);
app.use('/clo', cloRouter);
app.use('/season', seasonRouter);
app.use('/case', caseRouter);
app.use('/insert', insertRouter);
app.use('/recom', recomRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
