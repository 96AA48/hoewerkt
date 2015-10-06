//web.js
var express = require('express');
var less = require('express-less');
var hoewerkt = require('./hoewerkt');
var fs = require('fs');
var app = express();

//Set up jade rendering engine.
app.set('view engine', 'jade');
app.disable('view cache');
app.set('views', __dirname + '/resources/jade');

//Set up all static directories for getting resources.
app.use('/css', less(__dirname + '/resources/less', {debug : true}));
// app.use('/js', express.static(__dirname + '/resources/js'));
app.use('/images', express.static(__dirname + '/resources/images'));
app.use('/other', express.static(__dirname + '/resources/other'));
//Setup markdown middleware.

app.get('/', hoewerkt);
app.get('/:article', hoewerkt);
app.get('/:article/:difficulty', hoewerkt);

function start(port, host) {
  app.listen(port, host);
}

module.exports = start;

if (process.argv[2] == 'standalone') start(1024);
