#### In het kort - Hoe werktmanrooster
---
We hebben het eigenlijk wel genoeg gehad over broodjes, balies en archieven. Laten we beginnen met het echte werk, de laag van dit profielwerkstuk waar we wat dieper ingaan op alle stof van Werkmanrooster. Bij Werkmanrooster of rooster.io gaat het om de informatie van je rooster zo snel en efficient mogelijk op je scherm krijgen. Hoewel we in dit hoofdstuk niet heel diep in gaan op elk deel van rooster.io, maar gaan we vooral alles globaal uitleggen. De genoemde kopjes zijn natuurlijk apart uitgelegd in hoofdstukken, dus het klikken van de links na het lezen zou voor de benodigde diepgang zorgen. Maar voor we beginnen wat basis begrippen.


##### [Je gaat naar werkmanrooster.nl](/intypen)
Voordat je naar de website gaat zijn er een paar dingen die gebeuren tussen jouw computer in het internet. Je computer vraagt aan een DNS (Domain Name System) waar werkmanrooster.nl word omgezet in een internet telefoonnummer, zo genaamd een "IP adres" waar je computer naar toe gaat om verbinding te maken met de website.

Rooster.io stuurt dan de hoofdpagina, dit is misschien wel het snelste proces wat er gebeurd binnen het systeem. Er is namelijk geen informatie nodig van de gebruiker en de website kan gelijk reageren zonder roosters op te halen. Het enige wat rooster.io hoeft te doen is een pagina te laten zien aan de gebruiker.  
Wanneer de gebruiker op enter drukt nadat hij zijn of haar naam heeft ingetypt wordt een heel groot proces aan het werk gezet.

<!-- Op het moment dat de gebruiker op enter drukt wordt namelijk de naam die je hebt ingetypt geüpload naar rooster.io, dat wil zeggen, de informatie wordt vanaf de gebruiker gedeeld naar de server. De server controleerd wat je gestuurd hebt en reageerd op wat je hebt ingevuld. Bijvoorbeeld als je specifieke dingen intypt zoals "hoewerkt" word je naar deze paginas gestuurd. Als je zoekopdracht niet overeenkomt met die speciale gevallen dan doet hij een standaard zoekopdracht naar een rooster. -->

##### [Rooster.io gaat een match zoeken van je zoekopdracht.](/opzoek/normaal)
Rooster.io gaat bezig met het vergelijken van je zoekopdracht met wat het kan vinden in de database. Deze database bestaat uit meerdere datasets van leerlingen, docenten en lokalen. Als er meerdere datasets overeenkomen met de zoekopdracht laat hij een lijst zien van alle gevonden datasets. Als de zoekopdracht overeenkomt met maar één van de datasets uit de database dan gaat rooster.io verder met de volgende stap.

##### Het verkrijgen en verwerken van het rooster.
In deze stap gaat rooster.io bezig met het gebruiken van de gevonden dataset om een rooster op te halen. Hij doet dit door het gerelateerde rooster te downloaden en vervolgens te filteren om het rooster er uit te halen. Hoe deze filter werkt is waar rooster.io het meeste tijd over doet. Om meer functionaliteit toe te voegen zijn wordt alle informatie in de gedownloade pagina zoveel mogelijk gebruikt.

<!-- Nu dat het voorwerk is gedaan, is het eindelijk tijd voor rooster.io om bezig te gaan met waar het om gaat: roosters. Zoals je misschien gezien hebt bij [de informatie](http://werkmanrooster.nl/api/search?name=Bram%20van%20der%20Veen) is er een data waarde genaamd "url". Als je naar deze [url](http://roosters5.gepro-osi.nl/roosters/rooster.php?school=934&type=Leerlingrooster&afdeling=l_atheneum 6&leerling=16374) gaat dan zul je de normale roostersite zien van Schoolmasters. Waar je nu naar kijkt is de informatie die rooster.io ontvangt als hij opzoek gaat naar je rooster. De hoeveelheid informatie die uit deze pagina te halen is lijkt op het eerste gezicht triviaal, maar als je verder kijkt dan wat de gebruiker ziet zul je een grote cluster vinden van informatie die allemaal te gebruiken is voor verschillende doeleindes.  

Los van wat je met al die informatie kan doen, gaat rooster.io in dit geval bezig met het verwerken van het rooster op de pagina naar "rauwe informatie". Een dataobject word gemaakt van de verschillende dingen. Een algoritme gaat langs de verschillende dagen, gaat langs elk uur en kijkt naar de volgende dingen:  

* Is het een uitgevallen uur?
* Is er een roosterwijziging op het uur?
* Welk uur is het? (1e, 2e, etc)
* Welke docent geeft de les? (bGel, hTig, etc)
* Welk lokaal of welke locatie word er gebruikt in de les? (L2.10, Lfit, etc)
* Wat voor les is het? (WIS, AK, etc)

Rooster.io stopt dan alle uren in de bijhorende dag en stopt dan alle informatie bij elkaar. Het resultaat is een [dataobject](http://werkmanrooster.nl/api/schedule?name=Bram%20van%20der%20veen) wat door rooster.io gebruikt kan worden voor het laten zien van een rooster. -->

##### Het renderen van het rooster.
Maar hoe zorgen we ervoor dat [dit](http://werkmanrooster.nl/api/schedule?name=Bram%20van%20der%20veen) er uit gaat zien als [dat](http://werkmanrooster.nl/rooster/Bram van der Veen)?  
Rooster.io maakt gebruik van "templates" om de pagina's zo efficient mogelijk te bieden terwijl de informatie op de pagina wel dynamisch blijft.

<!-- Simpel is het niet, maar het systeem gebruikt aan aantal "[templates](http://git.werkmanrooster.nl/werkmanrooster/rooster-io/tree/master/resources/jade)" of sjablomen. Deze templates zijn gemaakt voor het laten zien van verschillende paginas. Rooster.io heeft er een voor de hoofdpagina, roosters, login en lijsten van mensen. Voor een rooster word het template "schedule" gebruikt. Deze template sorteerd de informatie van het dataobject in een tabel van een webpagina. Het is alsof het dataobject gesmolten ijzer is en het gegoten word in een vorm zodat het bruikbaar word. Er wordt bij het renderen van het rooster ook nog wat extra dingen bij gedaan voor beter gebruiksgemak. -->
