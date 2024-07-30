"use strict"

var http = require('http'), 
    path = require('path'),
    url = require('url'),
    fs = require('fs');

var DOCUMENT_ROOT = "../../03_css/";
var server = http.createServer(function(req, res) {
    if (path.normalize(decodeURIComponent(req.url)) !== decodeURIComponent(req.url)) {
        res.statusCode = 403;
        res.end();
        return;
    }
  var reqPath = url.parse(req.url).pathname;
  if (reqPath == "/") {
    reqPath = "ex01.html";
  }
  var fullPath = path.join(process.cwd(), DOCUMENT_ROOT, reqPath);
  fs.readFile(fullPath, "binary", function(err, file) {
    if(err) {
      if (err.code == "ENOENT") {
        console.log("SEND 404 for " + req.url);
        res.writeHeader(404, {"Content-Type": "text/html"});  
        res.write("<h1>Not found</h1>");  
        res.end();  
      } else {
        console.error("Error", err);
        res.writeHeader(500, {"Content-Type": "text/plain"});  
        res.write(err + "\n");  
        res.end();  
      }
    } else{
      console.log("SEND 200 for " + req.url);
      res.writeHeader(200);  
      res.write(file, "binary");  
      res.end();
    }
  });
});

server.listen(3000, function() {
  console.log("Sever listeining on http://localhost:3000");
});