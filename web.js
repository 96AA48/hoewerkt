//web.js
var express = require('express');
var less = require('express-less');

var app = express();

//Set up jade rendering engine.
app.set('view engine', 'jade');
app.disable('view cache');
app.set('views', __dirname + '/resources/jade');

//Set up all static directories for getting resources.
app.use('/css', less(__dirname + '/resources/less'));
// app.use('/js', express.static(__dirname + '/resources/js'));
app.use('/other', express.static(__dirname + '/resources/other'));

app.get('/', function (req, res) {
  res.send('Hello world!');
});

app.listen(1025);
