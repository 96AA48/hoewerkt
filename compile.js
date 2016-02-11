//compile.js
var fs = require('fs');
var marked = require('marked');
var articles = [
  'inleiding:Inleiding',
  'moeilijkheidsgraad:Moeilijkheidsgraad',
  'inhetkort:In het kort',
  'intypen:Je gaat naar de website',
  'opzoek:Op zoek naar je naam',
  'verkrijgen:Verkrijgen en verwerken',
  'templates:Templates',
  'database:Leerlingen, Lokalen en Docenten (database)',
  'handenuitdemouwen:Handen uit de mouwen',
  'conclusie:Conclusie',
  'nawoord:Nawoord'
];
// var buffer = '<a href="http://hoewerkt.werkmanrooster.nl">Een betere leeservaring is op http://hoewerkt.werkmanrooster.nl, het is ook bedoelt om het hier te lezen. Ook staat dit papier NIET op de bedoelde volgorde.</a>';
var buffer = '';
// var articles = fs.readdirSync(__dirname + '/articles');

for (var article of articles) {
  article = article.split(':')[0];
  buffer += marked(fs.readFileSync(__dirname + '/articles/' + article + '.md').toString());
}

fs.writeFileSync(__dirname + '/pws.html', buffer);
