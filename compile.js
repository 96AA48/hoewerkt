//compile.js
var fs = require('fs');
var marked = require('marked');
var buffer = '<a href="http://hoewerkt.werkmanrooster.nl">Een betere leeservaring is op http://hoewerkt.werkmanrooster.nl, het is ook bedoelt om het hier te lezen. Ook staat dit papier NIET op de bedoelde volgorde.</a>';

var folders = fs.readdirSync(__dirname + '/articles');

for (var folder of folders) {
  if (folder != 'index.md') {
    var articles = fs.readdirSync(__dirname + '/articles/' + folder);
    for (var article of articles) {
      buffer += marked(fs.readFileSync(__dirname + '/articles/' + folder + '/' + article).toString());
    }
  }
  else {
    buffer += marked(fs.readFileSync(__dirname + '/articles/' + folder).toString());
  }
}

fs.writeFileSync(__dirname + '/pws.html', buffer);
