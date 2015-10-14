var express = require('express');
var path = require('path');
var app = express();

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use("/public", express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(app.get('views') + '/index.html');
});

app.get('/contact', function (req, res) {
  res.sendFile(app.get('views') + '/contact.html');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});