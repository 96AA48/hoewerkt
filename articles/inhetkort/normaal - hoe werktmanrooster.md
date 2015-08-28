#### Hoe werktmanrooster
---
Hoewel broodjes heel erg lekker zijn, is het doel van Werkmanrooster (nog) niet om broodjes te maken. Bij Werkmanrooster of rooster.io gaat het om de informatie van je rooster zo snel en efficient mogelijk op je scherm krijgen. Hoewel we in dit hoofdstuk niet heel diep in gaan op elk deel van rooster.io, maar gaan we vooral alles globaal uitleggen. De genoemde kopjes zijn natuurlijk apart uitgelegd in hoofdstukken, dus het klikken van de links na het lezen zou voor de benodigde diepgang zorgen. Maar voor we beginnen wat basis begrippen.

* Server  
Je hebt vast wel een keer gehoord van een "server", maar wat dat ding eigenlijk is en doet heb je waarschijnlijk nooit bij stil gestaan. Een server is een computer die verschillende opdrachten kan uitvoeren voor een gebruiker (client), meestal omdat de handeling te zwaar is voor de gebruiker zelf of omdat het centraliseren van die handelingen efficienter is.
* rooster.io (zonder hoofdletter)  
Het naam van Werkmanrooster als project in code, Werkmanrooster en rooster.io kunnen constant uitgewisseld worden voor benaming in zinnen.

* Templates  
Sjablomen

##### [Je gaat naar werkmanrooster.nl](/intypen)
Voordat je naar de website gaat zijn er een paar dingen die gebeuren tussen jouw computer in het internet. Je computer vraagt aan een DNS (Domain Name System) waar werkmanrooster.nl word omgezet in een internet telefoonnummer, zo genaamd een "IP adres" waar je computer naar toe gaat om verbinding te maken met de website.

###### Je typt je naam in en je drukt op enter.
Dit is misschien wel het snelste proces wat er gebeurd binnen het systeem. Er is namelijk geen informatie nodig van de gebruiker en de website kan gelijk reageren zonder roosters op te halen. Het enige wat rooster.io hoeft te doen is een pagina te laten zien aan de gebruiker.  
Dit is waar je een heel groot proces aan het werk zet. Op het moment dat de gebruiker op enter drukt wordt namelijk de naam die je hebt ingetypt geüpload naar rooster.io, dat wil zeggen, de informatie wordt vanaf de gebruiker gedeeld naar de server. De server controleerd wat je gestuurd hebt en reageerd op wat je hebt ingevuld. Bijvoorbeeld als je specifieke dingen intypt zoals "hoewerkt" word je naar deze paginas gestuurd. Als je zoekopdracht niet overeenkomt met die speciale gevallen dan doet hij een standaard zoekopdracht naar een rooster.

##### [Rooster.io gaat een match zoeken van je zoekopdracht.](/opzoek)
Bijvoorbeeld als je `Bram van der Veen` in typt zal het systeem [de informatie](http://werkmanrooster.nl/api/search?name=Bram van der Veen) vinden die daar bij hoort. Als je op de link klikt zul je verschillende waardes zien. Een waarde word gedefineerd als :
```javascript
//In dit voorbeeld heeft naam_voor_de_data, de waarde "data".
{
  "naam_voor_de_data": "data",
  "id": "16374bram"
}
```
Wat hier belangrijk is, is dat je je beseft dat als je iets in typt dat rooster.io de verschillende waardes bij langs gaat om te kijken of ze overeen komen met de zoekopdracht.  
In dit geval komt `Bram van der Veen` overeen met de waarde van het variabele `name`. Maar hetzelfde geld als ik bijvoorbeeld alleen `Bram` of `van der Veen` in typ, het systeem zal alleen [meerdere ](http://werkmanrooster.nl/api/search?name=Bram)[mensen](http://werkmanrooster.nl/api/search?name=van der Veen) vinden met dezelfde waardes.  
Als rooster.io meerdere mensen vindt voor dezelfde zoekopdracht dan maakt hij een lijst zodat de gebruiker kan kiezen uit welk van de mensen hij of zij het rooster wil zien. Als er maar één persoon gevonden wordt dan gaat rooster.io verder met de volgende stap.

##### Het verkrijgen en verwerken van het rooster.
Nu dat het voorwerk is gedaan, is het eindelijk tijd voor rooster.io om bezig te gaan met waar het om gaat: roosters. Zoals je misschien gezien hebt bij [de informatie](http://werkmanrooster.nl/api/search?name=Bram%20van%20der%20Veen) is er een data waarde genaamd "url". Als je naar deze [url](http://roosters5.gepro-osi.nl/roosters/rooster.php?school=934&type=Leerlingrooster&afdeling=l_atheneum 6&leerling=16374) gaat dan zul je de normale roostersite zien van Schoolmasters. Waar je nu naar kijkt is de informatie die rooster.io ontvangt als hij opzoek gaat naar je rooster. De hoeveelheid informatie die uit deze pagina te halen is lijkt op het eerste gezicht triviaal, maar als je verder kijkt dan wat de gebruiker ziet zul je een grote cluster vinden van informatie die allemaal te gebruiken is voor verschillende doeleindes.  

Los van wat je met al die informatie kan doen, gaat rooster.io in dit geval bezig met het verwerken van het rooster op de pagina naar "rauwe informatie". Een dataobject word gemaakt van de verschillende dingen. Een algoritme gaat langs de verschillende dagen, gaat langs elk uur en kijkt naar de volgende dingen:  

* Is het een uitgevallen uur?
* Is er een roosterwijziging op het uur?
* Welk uur is het? (1e, 2e, etc)
* Welke docent geeft de les? (bGel, hTig, etc)
* Welk lokaal of welke locatie word er gebruikt in de les? (L2.10, Lfit, etc)
* Wat voor les is het? (WIS, AK, etc)

Rooster.io stopt dan alle uren in de bijhorende dag en stopt dan alle informatie bij elkaar. Het resultaat is een [dataobject](http://werkmanrooster.nl/api/schedule?name=Bram%20van%20der%20veen) wat door rooster.io gebruikt kan worden voor het laten zien van een rooster.

##### Het renderen van het rooster.
Maar hoe zorgen we ervoor dat [dit](http://werkmanrooster.nl/api/schedule?name=Bram%20van%20der%20veen) er uit gaat zien als [dat](http://werkmanrooster.nl/rooster/Bram van der Veen)?
Simpel is het niet, maar het systeem gebruikt aan aantal "[templates](http://git.werkmanrooster.nl/werkmanrooster/rooster-io/tree/master/resources/jade)" of sjablomen. Deze templates zijn gemaakt voor het laten zien van verschillende paginas. Rooster.io heeft er een voor de hoofdpagina, roosters, login en lijsten van mensen. Voor een rooster word het template "schedule" gebruikt. Deze template sorteerd de informatie van het dataobject in een tabel van een webpagina. Het is alsof het dataobject gesmolten ijzer is en het gegoten word in een vorm zodat het bruikbaar word. Er wordt bij het renderen van het rooster ook nog wat extra dingen bij gedaan voor beter gebruiksgemak.
