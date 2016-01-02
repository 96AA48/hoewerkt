#### Leerlingen, Lokalen en Docenten
---
We weten al hoe werkmanrooster jouw informatie gebruikt om het zoeken naar je rooster makkelijker te maken. Maar hoe komt werkmanrooster eigenlijk aan die informatie? Dat gaan we bespreken in dit hoofdstuk.

Werkmanrooster maakt gebruik van een zelfgeschreven script genaamd een "`crawler`". Deze crawler kan meerdere webpagina's afgaan om informatie te verkrijgen en deze opslaan. Dit doet hij door bepaalde patronen te herkennen in de webpagina's en daarmee de benodigde informatie herkennen. Het script heet in `spider.js` in het project.

---
#### Een diepere ontleding
Laten we wat beter kijken naar de manier waarop `spider.js` werkt.
We nemen het gedeelte waar het belangrijkste gebeurd.

```javascript
var listOfStudents = cheerio('select', download).children();

for (student in listOfStudents) {

  var name = cheerio(listOfStudents[student]).text().split(' - ')[1];
  var group = cheerio(listOfStudents[student]).text().split(' - ')[0];
  var id = cheerio(listOfStudents[student]).val();

  var databaseEntry = {
    'id' : id,
    'group' : group,
    'username' : id + name.split(' ')[0].toLowerCase(),
    'name' : name,
    'first_name' : name.split(' ')[0],
    'last_name' : name.split(' ').splice(1).join(' '),
    'studentcategory' : studentcategory,
    'type' : page.type.replace(/rooster/g, '').toLowerCase()
  }

  collection.insert(databaseEntry);
}
```
