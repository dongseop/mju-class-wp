"use strict";

var EventEmitter = require("events");

var server = new EventEmitter();
server.on('test', function() {
  console.log('test fired!');
});

setTimeout(function() {
  server.emit('test');
}, 1000);

console.log('start timer.');
