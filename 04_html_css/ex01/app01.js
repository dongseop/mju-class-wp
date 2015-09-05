"use strict"

var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHeader(200, {"Content-Type": "text/plain"});
  res.write("Hello World");
  res.end();
});

server.listen(3000, function() {
  console.log("Sever listeining on http://localhost:3000");
});
