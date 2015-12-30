//hoewerkt.js
var fs = require('fs');
var marked = require('marked');
var articles = [
  'inleiding:Inleiding',
  'moeilijkheidsgraad:Moeilijkheidsgraad',
  'inhetkort:In het kort',
  'intypen:Je gaat naar de website',
  'opzoek:Op zoek naar je naam',
  'verkrijgen:Verkrijgen en verwerken',
  'dataapps:Data gedreven applicaties',
  'templates:Templaten',
  'database:De database'
]

module.exports = function (req, res, next) {
  if (req.url == '/') {
    res.render('article', render('index'));
  }
  else {
    var sub = req.url.split('/')[1];
    for (article of articles) {
      if (sub == article.split(':')[0]) {
        res.render('article', render(sub, res))
        return;
      }
    }
    res.render('404');
  }
}

function render(file, res) {
  if (file == 'index') var content = fs.readFileSync(__dirname + '/articles/index.md').toString();
  else {

    var files = fs.readdirSync(__dirname + '/articles/' + file.toLowerCase()).join('\n');
    var selected = files.match(new RegExp('.*\.md'));
    if (!selected) res.render('404');
    var content = fs.readFileSync(__dirname + '/articles/' + file + '/' + selected[0]).toString();
  }

  return {'markdown': marked(content), 'articles': articles}
}
