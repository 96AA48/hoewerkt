//compile.js
var fs = require('fs');
var marked = require('marked');
var buffer = '<a href="http://hoewerkt.werkmanrooster.nl">Een betere leeservaring is op http://hoewerkt.werkmanrooster.nl, het is ook bedoelt om het hier te lezen. Ook staat dit papier NIET op de bedoelde volgorde.</a>';

var articles = fs.readdirSync(__dirname + '/markdown');

for (article of articles) {
  buffer += marked(fs.readFileSync(__dirname + '/markdown/' + article).toString());
}

fs.writeFileSync(__dirname + '/pws.html', buffer);
