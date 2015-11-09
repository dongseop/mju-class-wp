var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var http = require('http');

var app = express();
app.set('port', 3000);
var server = http.createServer(app);
var io = require('socket.io')(server);
server.listen(3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(path.join(__dirname, '/bower_components')));

app.use('/', routes);
app.use('/users', users);

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

io.on('connection', function(socket){
  socket.on('join', function(name) {
    socket.join(name);
    socket.handshake.name = name;
    io.emit('join', name);
  });

  socket.on('chat', function(data){
    var found = data.message.match(/^#([\S]+) (.+)/);
    if (found && found.length > 0) {
      return io.to(found[1]).emit('dm', {
        from: data.from,
        message: found[2]
      });
    }
    io.emit('chat', data);
  });

  socket.on('disconnect', function(){
    io.emit('left', socket.handshake.name);
  });
});


module.exports = app;
