#### Leerlingen, Lokalen en Docenten
---
We weten al hoe werkmanrooster jouw informatie gebruikt om het zoeken naar je rooster makkelijker te maken. Maar hoe komt werkmanrooster eigenlijk aan die informatie? Dat gaan we bespreken in dit hoofdstuk.

Werkmanrooster maakt gebruik van een zelfgeschreven script genaamd een "`crawler`". Deze crawler kan meerdere webpagina's afgaan om informatie te verkrijgen en deze opslaan. Dit doet hij door bepaalde patronen te herkennen in de webpagina's en daarmee de benodigde informatie herkennen. Het script heet in `spider.js` in het project.

---
#### Een diepere ontleding
Laten we wat beter kijken naar de manier waarop `spider.js` werkt.
We nemen het gedeelte waar het belangrijkste gebeurd.

![Rooster namen](http://i.imgur.com/89e4Y4M.png)

```javascript
// De variabele met de studenten bijv. "A6A - Bram van der Veen", "A6B - David Veenstra"
var listOfStudents = cheerio('select', download).children();

//Ga alle studenten in de lijst bij langs. (Werkt hetzelfde als each bij templates)
for (student in listOfStudents) {
  //Haal de naam, de group en het leerlingnummer uit de student.
  var name = cheerio(listOfStudents[student]).split(' - ')[1];
  var group = cheerio(listOfStudents[student]).split(' - ')[0];
  var id = cheerio(listOfStudents[student]).value();

  //Maak een dataobject wat later in de database gaat.
  var databaseEntry = {
    'id' : id,
    'group' : group,
    'username' : id + name.split(' ')[0],
    'name' : name,
    'first_name' : name.split(' ')[0],
    'last_name' : name.split(' ').splice(1).join(' '),
    'studentcategory' : studentcategory,
    'type' : page.type.replace(/rooster/g, '')
  }

  //Stop het dataobject in de database
  collection.insert(databaseEntry);
}
```
Aan de rechterkant zien we de lijst met mogelijke leerlingen als je een rooster wil opvragen op de normale rooster site. Aan de rechter kant zien we het stuk code wat deze informatie verwerkt. De lijst aan de linkerkant is heel mooi georganiseerd. Als iets in een mooi patroon voorkomt kunnen we daar gemakkelijk code voor schrijven om er informatie uit te filtreren! Laten we langs de code gaan aan de rechterkant.

De eerste stap die je ziet, is dat er een variabele wordt verklaard genaamd `listOfStudents`. Dit variabele houdt een object vast waar alle leerlingen in zitten. Vervolgens word er met het `for` `keyword` duidelijk gemaakt dat we voor elke `student` in de `listOfStudents` bij langs willen. Dit gebeurd tussen de `{` en de `}` die volgt na het `for` `keyword`. Er worden dan weer een set met variabele verklaard.
