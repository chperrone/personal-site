var express = require('express');
var path = require('path');
var app = express();

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use("/public", express.static(__dirname + '/public'));
app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.sendFile(app.get('views') + '/index.html');
});

app.get('/contact', function (req, res) {
  res.sendFile(app.get('views') + '/contact.html');
});

app.get('/projects', function (req, res) {
  res.sendFile(app.get('views') + '/projects.html');
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});