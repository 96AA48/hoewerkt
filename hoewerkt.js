//hoewerkt.js
var fs = require('fs');
var marked = require('marked');
var articles = [
  'inleiding:Inleiding',
  'moeilijkheidsgraad:Moeilijkheidsgraad',
  'inhetkort:In het kort',
  'intypen:Je typt werkmanrooster.nl in',
  'opzoek:Op zoek naar je naam'
]

module.exports = function (req, res, next) {
  if (req.url == '/') {
    res.render('article', render('index'));
  }
  else {
    var sub = req.url.split('/')[1];
    var othersub = req.url.split('/')[2] || 'makkelijk';
    for (article of articles) {
      if (sub == article.split(':')[0]) {
        res.render('article', render(sub, othersub, res))
        return;
      }
    }
    res.render('404');
  }
}

function render(file, difficulty, res) {
  if (file == 'index') var content = fs.readFileSync(__dirname + '/articles/index.md').toString();
  else {

    var files = fs.readdirSync(__dirname + '/articles/' + file.toLowerCase()).join('\n');
    var selected = files.match(new RegExp(difficulty + '.*'));
    if (!selected) res.render('404');
    var content = fs.readFileSync(__dirname + '/articles/' + file + '/' + selected[0]).toString();
  }

  return {'markdown': marked(content), 'articles': articles}
}
