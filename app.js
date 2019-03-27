var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');
var profile = require('./routes/profile');
var guestbookAdd = require('./routes/guestbookAdd');
var add = require('./routes/add');
var read = require('./routes/read');
var de1ete = require('./routes/de1ete');
var signup = require('./routes/signup')
var sign = require('./routes/sign');


var db = mongoose.connection;
db.on('error', console.error);
db.on('open', function(){
  console.log('MongoDB connected');
});
mongoose.connect('mongodb://localhost/gbdb');

var app = express();

app.use(session({
  secret: 'H_E_L_L_O_W_O_R_L_D',
  resave: false,
  saveUninitialized: true
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/profile', profile);
app.use('/guestbookAdd', guestbookAdd);
app.use('/add', add);
app.use('/read', read);
app.use('/de1ete', de1ete);
app.use('/signup', signup);
app.use('/sign', sign);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
