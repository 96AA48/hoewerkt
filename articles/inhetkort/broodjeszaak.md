# In het kort - De broodjeszaak
---
Ik hoop dat ik je geen honger heb gegeven met deze titel, ik moet toegeven dat ik zelf ook honger kreeg toen ik dit voorbeeld bedacht.
Laten we beginnen. Hoe Werkmanrooster werkt is vergelijkbaar met een broodjeszaak, een soort Subway. Als jij binnen komt bij een broodjeszaak, dan loop je naar de balie en bestel je een broodje. Dit broodje wordt dan vervolgens voor je gemaakt: er worden ingrediënten voorbereid en uiteindelijk op je broodje gedaan. Het broodje wordt ingepakt in wat papier en wat servetten, daarna kan je genieten van je broodje.

Dit lijkt allemaal vrij triviaal. Natuurlijk zou je zeggen, dat is inderdaad hoe een broodjeszaak werkt, dat hoef je me niet uit te leggen. De meeste mensen zullen ook vragen wat dit nou te maken heeft met Werkmanrooster. Een goede vraag om te stellen. Het is namelijk zo dat Werkmanrooster en heel veel andere websites, apps en programma's op een soortgelijke manier werken. Laten we kort kijken wat je doet bij Werkmanrooster om je rooster te krijgen.

Je gaat naar [Werkmanrooster.nl](http://werkmanrooster.nl) en typt je naam in bij de zoekbalk die je ziet. Werkmanrooster zoekt het rooster voor je op, en verwerkt de informatie tot een leesbaar rooster. Je ziet dat de webpagina voor je geladen wordt en je rooster verschijnt zo voor je neus met wat stijlvol webdesign.

Laten we nu de broodjeszaak met Werkmanrooster vergelijken.

| Stap | Broodjeszaak | Werkmanrooster |
| :--: | ------------ | -------------- |
|1| Je vraagt naar je broodje | Je vraagt naar je naam
|2| Ingredienten worden verwerkt (klaargemaakt) | [Je rooster informatie wordt verwerkt](http://werkmanrooster.nl/api/search?name=Bram%20van%20der%20Veen)|
|3| De ingrediënten worden op je broodje gedaan| Je rooster informatie wordt gesorteerd in een leesbaar rooster|
|4| Je broodje word ingepakt in wat papier en wat servetten| [Je rooster verschijnt voor je neus met wat stijlvol webdesign](http://werkmanrooster.nl/rooster/Bram%20van%20der%20Veen)|

Je ziet dat er in beide gevallen sprake is van opvragen.
Er is in beide gevallen sprake van het verwerken van grondstoffen, of het nou ingrediënten zijn of informatie van een rooster.
De verwerkte grondstoffen worden van vervolgens samengevoegd totdat het een geheel vormt.
Het uiteindelijk geheel word ingepakt om het gebruiksvriendelijker te maken.

---

## Hoe werktmanrooster?

Tijd om ons los te maken van de broodjes en de lekkere dingen. Tijd voor wat details, we gaan nu elke stap weer langs van rooster.io. Klik op de kopjes om alvast naar het bijhorende hoofdstuk te gaan.

## [Je gaat naar Werkmanrooster.nl](/intypen)
Voordat je naar de website gaat zijn er een paar dingen die gebeuren tussen jouw computer en het internet. Je typt `Werkmanrooster.nl` in, in je adresbalk. Vervolgens word je gestuurd naar de website. Wat de meeste mensen niet weten is dat er aardig wat processen zijn verlopen in de tijd dat jij op enter hebt gedrukt en wanneer de webpagina voor jou laadt.

## [Rooster.io gaat een match zoeken van je zoekopdracht.](/opzoek)
Nadat je naam is opgevraagd bij rooster.io gaat de webapplicatie bezig met het vergelijken van jou zoekopdracht met een database vol met informatie van leerlingen, docenten, klassen en lokalen. Als het een overeenkomst vindt met jouw zoekopdracht en een stuk informatie in de database, dan wordt die informatie vervolgens gebruikt voor het maken van een rooster.

## [Het verkrijgen en verwerken van het rooster](/verkrijgen).
In deze stap gaat rooster.io bezig met het gebruiken van de gevonden informatie om een rooster op te halen. Hij doet dit door het downloaden van een rooster aan de hand van de informatie die hij heeft verkregen uit de database. Vervolgens wordt deze informatie verwerkt zodat het laten zien kan worden op een webpagina.

## [Het renderen van het rooster](/templates).
Maar hoe zorgen we ervoor dat [dit](http://werkmanrooster.nl/api/schedule?name=Bram%20van%20der%20veen) er uit gaat zien als [dat](http://werkmanrooster.nl/rooster/Bram van der Veen)?  
De laatste stap van rooster.io is het geven van de informatie in de vorm van een webpagina. Het verwerkte rooster uit de vorige stap word gestopt in een voor-ontworpen templaat en word vervolgens gestuurd naar de gebruiker.

[Volgende >>](/intypen)
