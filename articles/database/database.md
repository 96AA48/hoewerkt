# Leerlingen, Lokalen en Docenten
---
We weten al hoe Werkmanrooster jouw informatie gebruikt om het zoeken naar je rooster makkelijker te maken. Maar hoe komt Werkmanrooster eigenlijk aan die informatie? Dat gaan we bespreken in dit hoofdstuk.

Werkmanrooster maakt gebruik van een zelfgeschreven script genaamd een "`crawler`". Deze crawler kan meerdere webpagina's afgaan om informatie te verkrijgen en deze opslaan. Dit doet hij door bepaalde patronen te herkennen in de webpagina's en daarmee de benodigde informatie herkennen. Het script heet in `spider.js` in het project.

---
## Een diepere ontleding
Laten we wat beter kijken naar de manier waarop `spider.js` werkt.
We nemen het gedeelte waar het belangrijkste gebeurd.

![Rooster namen](http://i.imgur.com/89e4Y4M.png)

```javascript
// De variabele met de studenten bijv. "A6A - Bram van der Veen", "A6B - David Veenstra"
var listOfStudents = cheerio('select', download).children();

//Ga alle studenten in de lijst bij langs. (Werkt hetzelfde als each bij templates)
for (student in listOfStudents) {
  //Haal group, name en het leerlingnummer uit de student.
  var group = student.split(' - ')[0];
  var name = student.split(' - ')[1];
  var id = student.value();

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
  database.insert(databaseEntry);
}
```
Aan de rechter kant zien we de lijst met mogelijke leerlingen als je een rooster wil opvragen op de normale rooster site. Aan de rechter kant zien we het stuk code wat deze informatie verwerkt. De lijst aan de linker kant is heel mooi georganiseerd. Als iets in een mooi patroon voorkomt kunnen we daar gemakkelijk code voor schrijven om er informatie uit te filtreren! Laten we langs de code gaan aan de rechter kant.

De eerste stap die je ziet, is dat er een variabele wordt verklaard genaamd `listOfStudents`. Dit variabele houdt een object vast waar alle leerlingen in zitten. Vervolgens word er met het `for` `keyword` duidelijk gemaakt dat we voor elke `student` in de `listOfStudents` bij langs willen. Dit gebeurd tussen de `{` en de `}` die volgt na het `for` `keyword`. Er worden dan weer een set met variabele verklaard. Een variabele genaamd `name`, `group` en `id`. Wat deze variabelen vasthouden aan informatie is waarschijnlijk niet een schok. Hoe ze aan die informatie komen is wel wat moeilijker.

Bij de declaratie van `name` bijvoorbeeld : `var name = student.split(' - ')[1]`, wat betekent dat? Het eerste gedeelte is nog wel te verklaren met wat je weet. Het variabele `name` is gelijk aan `student.split(' - ')[1]`, maar wat `.split(' - ')[1]` nou weer betekent, is je waarschijnlijk onbekend. De functie `split()` kun je zien als een soort schaar. Hij knipt namelijk op een gegeven punt (dat word doorgegeven tussen de haakjes) en geeft een dataobject terug waar een zin in stukjes zit. Dit is heel erg handig als je kijkt naar de lijst aan de linker kant. Je ziet dat elke keer als we een `student` nemen uit `listOfStudents` dat we dan iets krijgen zoals `A6A - Bram van der Veen`. We krijgen dus de naam er uit door dit te knippen met `.split()`. Dit doen we dan met door `' - '` door te geven. Want als we zo knippen, houden we een dataobject over met `A6A` en `Bram van der Veen`. Het enige wat we dan nog moeten doen is dan de goede selecteren. Dus doen we er een `[1]` achter. Waarom `1` en niet `0`? De manier waarop computers werken, is dat ze beginnen met tellen bij `0`, en dus is `0` het eerste wat we kunnen krijgen uit een object en `1` het tweede.

Daar onder zien we een variabele genaamd `databaseEntry`, wat heel erg veel lijkt op het [dataobject](http://Werkmanrooster.nl/api/search?name=Bram van der Veen) uit het [archiefkast hoofdstuk](/opzoek). Dat komt omdat het gaat over hetzelfde object! De code die hier boven staat is dus verantwoordelijk voor het functioneren van rooster.io. Waar rooster.io een data gedreven applicatie is, is dit de data.

---
[Volgende >>](/handenuitdemouwen)
