##### Opzoek naar je naam
---

##### De Werkmanrooster archiefkast

Nadat je computer werkmanrooster.nl heeft gevonden via het [`DNS` telefoonboek](/intypen), maakt hij verbinding met de website. Je ziet de hoofdpagina van de website en typt je naam in. Je drukt op enter en de je rooster laadt in minder dan een seconde.

In die ene seconden zijn heel wat processen aan de gang om ervoor te zorgen dat jij je rooster te zien krijgt. We gaan ons nu bezighouden met hoe Werkmanrooster bijhoudt wie welk rooster heeft. Je hebt vast wel gehoord van een `database`, in een film of je favoriete serie. De nerd met een bril zit achter de computer terwijl hij iets met een `database` doet. Maar wat is een database eigenlijk? Een `database` is een groot digitaal archief waar informatie in zit. Laten we kijken naar een voorbeeld met een archiefkast.

Werkmanrooster beschikt over een grote archiefkast van leerlingen, docenten, klassen en lokalen. Als je op enter drukt gaat er een secretaresse bezig met het vergelijken van de naam die je hebt ingetypt en de namen in de archiefkast. Ze haalt alle namen er uit die overeenkomen met wat je hebt ingetypt. Aan het einde van de zoektocht heeft ze een bestand gevonden van een persoon waarnaar jij vroeg. Een bestand uit die archiefkast ziet er zo uit:

```json
  Naam: Bram van der Veen
  Leerlingnummer: 16374
  Klas: Atheneum
  Voornaam: Bram
  Achternaam: van der Veen
  Soort: Leerling
  Rooster: roosters5.gepro-osi.nl/roosters/rooster.php?school=934&type=Leerlingrooster&afdeling=l_atheneum 6&leerling=16374
```

Wat de secretaresse doet is elk bestand bij langs gaan en dit vergelijken met jouw zoekopdracht. Als jij vraagt naar "Bram" dan zal ze alle Brammen pakken. Vraag jij bijvoorbeeld naar "Atheneum 6" dan zal zij alle bestanden pakken die uit Atheneum 6 komen. Mocht ze alleen maar een bestand vinden bij de zoekopdracht, dan stuurt ze het gevonden bestand naar haar collega die het rooster zal opzoeken en uitprinten.

---

##### Zoeken naar een naald in een naaldberg
Bij het intypen van `Bram van der Veen` zal rooster.io [de informatie](http://werkmanrooster.nl/api/search?name=Bram van der Veen) vinden die daar bij hoort. Je ziet een duidelijke overeenkomst tussen het onder weergeven database bestand en het bestand van de archiefkast. Het verschil zijn wat vreemde tekens in en rond de informatie. Wat betekent dit allemaal?

```javascript
//In dit voorbeeld heeft naam_voor_de_data, de waarde "data".
{
  //De ":" wil zeggen dat de een waarde word gebonden aan een variabele
  //in dit geval "data" aan de "naam_voor_de_data" variabele.
  "naam_voor_de_data": "data"
}
```

Wat we hier zien is ook een soort van `code`. Het is misschien niet direct een manier van vertellen wat een computer moet doen, maar een manier waarop code informatie kan vasthouden en organiseren. De structuur (of syntax) is vergelijkbaar met die van `Javascript`, dat klopt ook zeker. Dit is namelijk een dataobject genoteerd in zogenaamd "**J**ava**s**cript **O**bject **N**otation", `JSON` in het kort. Eigenlijk staat er precies hetzelfde als in het bestand uit de archiefkast, maar er zijn wat tekens aan toegevoegd zodat de computer het kan lezen.

rooster.io werkt hier net zoals de secretaresse. Hij gaat alle bestanden bij langs om te kijken of jouw zoekopdracht overeenkomt met een van de vele bestanden in de database. Zo'n bestand ziet er zo uit:
```javascript
//Een dataset voor de zoekopdracht "Bram van der Veen"
{
      "id": "16374", //Leerlingnummer
      "group": "A6A", //Groep waaraan de leerling behoort
      "username": "16374bram", //De geschatte gebruikersnaam van de leerling
      "name": "Bram van der Veen", //De hele naam van de leerling
      "first_name": "Bram", //De voornaam van de leerling
      "last_name": "van der Veen", //De achternaam van de leerling
      "studentcategory": "l_atheneum 6", //Een variabele wat nodig is voor het opzoeken van het rooster.
      "type": "leerling", //Een variable die bepaald of deze dataset een leerling is of iets anders.
      "_id": "Mc5vtoIrhMM8e2dN",
      //De link naar het rooster van de leerling.
      "url": "roosters5.gepro-osi.nl/?school=934&type=Leerlingrooster&afdeling=l_atheneum 6&leerling=16374"
  }
```
Het bestand is eigenlijk een groep variabeles die het systeem bij langs gaat. In dit geval komt `Bram van der Veen` overeen met de waarde van het variabele `name`. Maar hetzelfde geld als ik bijvoorbeeld alleen `Bram` of `van der Veen` intyp, het systeem zal alleen [meerdere ](http://werkmanrooster.nl/api/search?name=Bram)[mensen](http://werkmanrooster.nl/api/search?name=van der Veen) vinden met dezelfde waardes.  
Als rooster.io meerdere mensen vindt voor dezelfde zoekopdracht dan maakt hij een lijst zodat de gebruiker kan kiezen uit welk van de mensen hij of zij het rooster wil zien. Als er maar één persoon gevonden wordt dan gaat rooster.io verder met de volgende stap, het rooster verkrijgen en verwerken.

[Volgende >>](/verkrijgen)
