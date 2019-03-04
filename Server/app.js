var express = require('express');
var http = require("https");
var app = express();
var server = require('http').Server(app)


var options = {
  "method": "GET",
  "hostname": "api.hurriyet.com.tr",
  "port": null,
  "path": "/v1/articles",
  "headers": {
    "accept": "application/json",
    "apikey": "d22dd0d0eebb477083c999a8f5b5a852"
  }
};

app.get('/news', function(req, res) {
    http.request(options, function(response) {
      response.pipe(res);
    }).on('error', function(e) {
      res.sendStatus(500);
    }).end();
});

server.listen(3000)


