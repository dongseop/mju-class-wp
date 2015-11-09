
var cookieParser = require('cookie-parser');
var passportSocketIo = require("passport.socketio");

module.exports = function(app, io) {
  io.use(passportSocketIo.authorize({
    cookieParser: cookieParser,
    key:          'express.sid',
    secret:       'long-long-long-secret-string-1313513tefgwdsvbjkvasd',
    store:        app.sessionStore,
    success:      function(data, accept) {
      accept(null, true);
    },
    fail: function(data, message, error, accept) {
      accept(null, false);
    },
  }));

  io.on('connection', function(socket) {
    socket.emit('welcome');
    socket.on('join', function(data) {
      console.log(socket.request.user);
      socket.join(socket.request.user._id.toString());
    });
  });
};
