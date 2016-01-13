# Handen uit de mouwen
---

We gaan samen een data-gedreven applicatie maken! Je dacht misschien dat het alleen bleef bij wat vertellen en misschien een conclusie, maar ik ga een stapje verder. Jij en ik, gaan gewoon even onze handen bij elkaar steken en gewoon iets op de wereld zetten samen. Maak je maar niet te veel zorgen, ik heb het meeste werk al gedaan. We hoeven alleen de laatste handen nog te leggen, maar hier valt veel van te leren.

We hebben het volgende nodig:
  * Een computer
  * Een [zip](/downloads/werktman.zip) van het project
  * Een programma waarmee je kan programmeren (bijv [Atom](http://atom.io))
  * Wat tijd en zin

---
Nadat je [Atom](http://atom.io) gedownload en geïnstaleerd hebt, is het tijd om de [zip](/downloads/werktman.zip) te downloaden waar het project in zit.
Pak de zip uit in een map en ga de map binnen. Je ziet een paar dingen. Een bestand genaamd `node`, `app.js`, `database.json` en `web.js`. Het bestand wat voor ons belangrijk is, is het `app.js` bestand. Dit is namelijk waar we onze app gaan bouwen. Open `app.js` met [Atom](http://atom.io). Dit is wat je nu moet zien :

```javascript
//Handen uit de mouwen!

//Importeren van het database dataobject
var database = require('./database.json');
var web = require('./web');

var publishBuffer = '';

//Loop door alle dingen van de database heen.
for (entry of database.data) {
  //Hier gaan wij programmeren!
  publishBuffer +=;
}

//We laten via het web zien wat we gedaan hebben.
web.publish(publishBuffer);

```

Maak je maar geen zorgen, ik laat je niet zomaar alles zelf bedenken. Ik hou je hand vast terwijl ik je stap voor stap zeg wat we gaan doen. Laat ik beginnen met uitleggen wat er nu voor je neus staat. Aan het begin van het bestand zien we twee `var` verklaard worden. Het variabele `database` is een database van alle leerlingen, docenten en lokalen die publiek online verkrijgbaar zijn. Het variabele `web` is een object met functies die we kunnen gebruiken voor verschillende doeleinden, in ons geval iets aan het web laten zien. Een object met functies dat geïmporteerd word via `require()` noemen we een module.

Dan hebben we een `var` genaamd `publishBuffer`, dit is een `string`. Een string word altijd aangegeven tussen quotes. Een string houd informatie vast zoals een woord of een zin, tussen die twee quotes. Hier is een voorbeeld van een string `'Dit is een string'`. Als het laatste zien we dat we een functie gebruiken van de `web` module. Met de functie `web.publish()` publiceren we een gegeven string naar het internet, die string is ons geval het `var` `publishBuffer`.

Dan is er nog een stuk waar er staat `//Hier gaan we programmeren`. Zoals de comment het aangeeft, is dit de plek waar wij gaan programmeren. Het `for` `keyword` er boven zorgt ervoor dat we door alle dingen van de database heen gaan. Tussen de haakjes (`{` en `}`) kunnen we het variabele `entry` gebruiken om bij onze database te komen.

---

# Switch-a-roo

Laten we beginnen met het schrijven van wat simpele code. Typ het volgende tussen de haakjes van het `for` `keyword` (Waar `//Hier gaan we programmeren` staat).

```javascript
publishBuffer += entry + '\n';
```
**Stappenplan**: Zorg er vervolgens voor dat je het bestand heb opgeslagen. Ga nu weer terug naar het mapje wat je hebt uigepakt en klik en sleep `app.js` op `node` en laat los. Ga vervolgens naar deze [link](http://localhost:1025).

 Wat je op die webpagina te zien krijgt is het resultaat van wat we net hebben geschreven. Je ziet waarschijnlijk heel vaak `[object Object]` staan, en dat klopt. We hebben namelijk iedere keer geprobeerd een object toe te voegen aan onze webpagina en `Javascript` laat het vervolgens zo zien. Laten we een kleine aanpassing maken waardoor we wat te zien krijgen.

```javascript
publishBuffer += entry.name + '\n';
```

Herhaal het stappenplan van eerder. En en refresh de [pagina](http://localhost:1025) waar je net op was.
Er is wat veranderd! Je ziet namelijk niet meer `[object Object]` maar van alles wat, leerlingen, lokalen en docenten. Laten we nog een paar veranderingen maken, we gaan namelijk gebruik maken van het `if` `keyword` om een afweging te doen. We willen namelijk alleen nog maar docenten laten zien. Vervang alles tussen de haakjes van `for` met :

```javascript
//Als entry.type gelijk is aan (hetzelfde is als) 'docent'
if (entry.type == 'docent') {
  //Voeg het toe aan de publishBuffer
  publishBuffer += entry.name += '\n';
}
```

Herhaal het stappenplan net zoals bij de eerste keer en bekijk de resultaten. Je ziet als het goed is alleen nog maar de namen van docenten! We kunnen in het oneindig doorgaan met verschilende dingen verzinnen wat we met deze data kunnen doen. Het punt is, dat je zelf iets gemaakt hebt waar je informatie verwerkt op de manier waarop jij het wil. Als je zelf wat aanpassingen wil maken aan de code, doe het vooral, leef je uit! Als je terug gaat naar het hoofdstuk over de [archiefkast](/opzoek) dan zie je onderaan de pagina een voorbeeld dataobject. Dit dataobject gebruik jij ook. Als jij dus bijvoorbeeld `entry.type == 'leerling'` doet krijg je alleen maar leerlingen. Je kan ook mensen gaan filteren met dezelfde voornaam of achternaam.

Bedenk ook een keer zelf een manier waarop je de informatie kan sorteren of verwerken, hoe je dit wil doen en pas de code aan. Herhaal de stappen van het stappenplan, blijf de code zo vaak aan passen als je wil en speel er gewoon wat mee. Weet gewoon dat je vandaag heb geprogrameerd, op een manier waarop ik ook ooit begon, met kleine stapjes. Ik hoop dat je het leuk vond!

---
[Volgende >>](/conclusie)
