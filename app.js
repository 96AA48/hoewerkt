//web.js
var express = require('express');
var less = require('express-less');
var markdown = require('express-markdown');
var fs = require('fs');
var app = express();

//Set up jade rendering engine.
app.set('view engine', 'jade');
app.disable('view cache');
app.set('views', __dirname + '/resources/jade');
app.locals.articles = fs.readdirSync(__dirname + '/markdown');

//Set up all static directories for getting resources.
app.use('/css', less(__dirname + '/resources/less', {debug : true}));
// app.use('/js', express.static(__dirname + '/resources/js'));
app.use('/images', express.static(__dirname + '/resources/images'));
app.use('/other', express.static(__dirname + '/resources/other'));
//Setup markdown middleware.
app.use(markdown({directory: __dirname + '/markdown', view: 'article'}));

app.get('/', function (req, res) {
  res.redirect('/home.md');
});

function start(port) {
  app.listen(port);
}

module.exports = start;

if (process.argv[2] == 'standalone') start(1024);
