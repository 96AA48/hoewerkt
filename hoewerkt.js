//hoewerkt.js
var fs = require('fs');
var marked = require('marked');
var articles = [
  'Inleiding',
  'Moeilijkheidsgraad',
  'Inhetkort:In het kort'
]

module.exports = function (req, res, next) {
  console.log('Got a hit');
  if (req.url == '/') {
    res.render('article', render('index'));
  }
  else {
    var sub = req.url.split('/')[1];
    var othersub = req.url.split('/')[2] || 'makkelijk';

    for (article of articles) {
      if (sub == article.split(':')[0]) {
        res.render('article', render(sub, othersub))
        return;
      }
    }
    res.render('404');
  }
}

function render(file, difficulty) {
  if (file == 'index') var content = fs.readFileSync(__dirname + '/articles/index.md').toString();
  else {
    console.log('files', file);
    var files = fs.readdirSync(__dirname + '/articles/' + file.toLowerCase()).join('\n');
    var selected = files.match(new RegExp(difficulty + '.*'))[0];
    var content = fs.readFileSync(__dirname + '/articles/' + file + '/' + selected).toString();
  }

  return {'markdown': marked(content), 'articles': articles}
}
