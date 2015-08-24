#### Hoe werktmanrooster
---
Hoewel broodjes heel erg lekker zijn, is het doel van Werkmanrooster (nog) niet om broodjes te maken. Bij Werkmanrooster of rooster.io gaat het om de informatie van je rooster zo snel en efficient mogelijk op je scherm krijgen. Hoewel we in dit hoofdstuk niet heel diep in gaan op elk deel van rooster.io, maar gaan we vooral alles globaal uitleggen. De genoemde kopjes zijn natuurlijk apart uitgelegd in hoofdstukken, dus het klikken van de links na het lezen zou voor de benodigde diepgang zorgen. Maar voor we beginnen wat basis begrippen.

* Server  
Je hebt vast wel een keer gehoord van een "server", maar wat dat ding eigenlijk is en doet heb je waarschijnlijk nooit bij stil gestaan. Een server is een computer die verschillende opdrachten kan uitvoeren voor een gebruiker (client), meestal omdat de handeling te zwaar is voor de gebruiker zelf of omdat het centraliseren van die handelingen efficienter is.
* rooster.io (zonder hoofdletter)  
Het naam van Werkmanrooster als project in code, Werkmanrooster en rooster.io kunnen constant uitgewisseld worden voor benaming in zinnen.

##### Je gaat naar [Werkmanrooster.nl](http://werkmanrooster.nl)
Dit is misschien wel het snelste proces wat er gebeurd binnen het systeem. Er is namelijk geen informatie nodig van de gebruiker en de website kan gelijk reageren zonder roosters op te halen. Het enige wat rooster.io hoeft te doen is een pagina te laten zien aan de gebruiker.

##### Je typt je naam in en je drukt op enter.
Dit is waar je een heel groot proces aan het werk zet. Op het moment dat de gebruiker op enter drukt wordt namelijk de naam die je hebt ingetypt geüpload naar rooster.io, dat wil zeggen, de informatie wordt vanaf de gebruiker gedeeld naar de server. De server controleerd wat je gestuurd hebt en reageerd op wat je hebt ingevuld. Bijvoorbeeld als je specifieke dingen intypt zoals "hoewerkt" word je naar deze paginas gestuurd. Als je zoekopdracht niet overeenkomt met die speciale gevallen dan doet hij een standaard zoekopdracht naar een rooster.

##### Rooster.io gaat een match zoeken van je zoekopdracht.
Bijvoorbeeld als je `Bram van der Veen` in typt zal het systeem [de informatie](http://werkmanrooster.nl/api/search?name=Bram van der Veen) vinden die daar bij hoort. Als je op de link klikt zul je verschillende waardes zien. Een waarde word gedefineerd als :
```javascript
//In dit voorbeeld heeft naam_voor_de_data, de waarde "data".
{
  "naam_voor_de_data": "data",
  "id": "16374bram"
}
```
Wat hier belangrijk is, is dat je je beseft dat als je iets in typt dat rooster.io de verschillende waardes bij langs gaat om te kijken of ze overeen komen met de zoekopdracht.  
In dit geval komt `Bram van der Veen` overeen met de waarde van het variabele `name`. Maar hetzelfde geld als ik bijvoorbeeld alleen `Bram` of `van der Veen` in typ, het systeem zal alleen [meerdere](http://werkmanrooster.nl/api/search?name=Bram) [mensen](http://werkmanrooster.nl/api/search?name=van der Veen) vinden met dezelfde waardes.  
Als rooster.io meerdere mensen vindt voor dezelfde zoekopdracht dan maakt hij een lijst zodat de gebruiker kan kiezen uit welk van de mensen hij of zij het rooster wil zien. Als er maar één persoon gevonden wordt dan gaat rooster.io verder met de volgende stap.

##### Het verkrijgen en verwerken van het rooster.