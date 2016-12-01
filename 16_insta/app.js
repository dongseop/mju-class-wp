var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var flash = require('connect-flash');
var mongoose   = require('mongoose');
var Img = require('./models/img');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
if (app.get('env') === 'development') {
  app.locals.pretty = true;
}
app.locals.moment = require('moment');

// mongodb connect
mongoose.connect('mongodb://user:asdasd@ds041394.mongolab.com:41394/nodewp');
mongoose.connection.on('error', console.log);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var MongoStore = require('connect-mongo')(session);
app.sessionStore = new MongoStore({mongooseConnection: mongoose.connection});
app.use(session({
  resave: true,
  key: 'express.sid',
  saveUninitialized: true,
  secret: 'long-long-long-secret-string-1313513tefgwdsvbjkvasd',
  store: app.sessionStore
}));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(path.join(__dirname, '/bower_components')));

app.get('/', function(req, res, next) {
  Img.find().sort({createdAt: -1}).limit(30).exec(function(err, imgs) {
    if (err) {
      return next(err);
    }
    res.render("index", {images: imgs});
  });
});


// 1. 아래의 AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY 는 
//    AWS의 IAM에서 새로운 사용자를 추가해서 받아야 함!
// 2. S3_BUCKET은 AWS의 S3에서 새로 생성해서 만들어야 함
// 3. S3 bucket은 CORS 설정이 필요함
// 4. IAM의 user에게는 S3를 access할 수 있는 permission을 줘야 함!

//=============================
// 환경변수 설정방법
//=============================
// for Mac
// export AWS_ACCESS_KEY_ID=AKIAJ2H?????SYHZSI5Q 
// export AWS_SECRET_ACCESS_KEY=9X8HmkWZQlWsYZovL4LLXedqD1NWd7Mn????????
// export S3_BUCKET=mju-aws-s3-image-test

// for PC
// setx AWS_ACCESS_KEY_ID=AKIAIR2NCQK4BK3GYPUA 
// setx AWS_SECRET_ACCESS_KEY=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
// setx S3_BUCKET=mju-aws-s3-image-test

// for HEROKU
// heroku config:set AWS_ACCESS_KEY_ID =xxx AWS_SECRET_ACCESS_KEY =yyy
// heroku config:set S3_BUCKET = zzz

var aws = require('aws-sdk');
var S3_BUCKET = process.env.S3_BUCKET;

app.get('/s3', function(req, res, next) {
  var s3 = new aws.S3({region: 'ap-northeast-2'});
  var filename = req.query.filename;
  var type = req.query.type;
  s3.getSignedUrl('putObject', {
    Bucket: S3_BUCKET,
    Key: filename,
    Expires: 900,
    ContentType: type,
    ACL: 'public-read'
  }, function(err, data) {
    if (err) {
      console.log(err);
      return res.json({err: err});
    }
    res.json({
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${filename}`
    });
  });
});

app.get('/new', function(req, res, next) {
  res.render("new");
});

app.post('/', function(req, res, next) {
  var img = new Img({url: req.body.url});
  img.save(function(err, doc) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
