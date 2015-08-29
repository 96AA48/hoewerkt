##### Opzoek naar je naam - Zoeken naar een naald in een naaldberg
---
Bijvoorbeeld als je `Bram van der Veen` in typt zal het systeem [de informatie](http://werkmanrooster.nl/api/search?name=Bram van der Veen) vinden die daar bij hoort. Als je op de link klikt zul je verschillende waardes zien. Een waarde binnen een dataset word gedefineerd als :
```javascript
//In dit voorbeeld heeft naam_voor_de_data, de waarde "data".
{
  //De ":" wil zeggen dat de een waarde word gebonden aan een variabele
  //in dit geval "data" aan de "naam_voor_de_data" variabele.
  "naam_voor_de_data": "data"
}
```
Wat hier belangrijk is, is dat je je beseft dat als je iets in typt dat rooster.io de verschillende waardes bij langs gaat om te kijken of ze overeen komen met de zoekopdracht.
Hier is een dataset zoals laten zien werd bij de eerste link in dit hoofdstuk.
```javascript
//Een dataset voor de zoekopdracht "Bram van der Veen" of "16374"
{
      "id": "16374", //Leerlingnummer
      "group": "A6A", //Groep waaraan de leerling behoort
      "username": "16374bram", //De geschatte gebruikersnaam van de leerling
      "name": "Bram van der Veen", //De hele naam van de leerling
      "first_name": "Bram", //De voornaam van de leerling
      "last_name": "van der Veen", //De achternaam van de leerling
      "studentcategory": "l_atheneum 6", //Een variabele wat nodig is voor het opzoeken van het rooster.
      "type": "leerling", //Of deze dataset een leerling is of iets anders.
      "_id": "Mc5vtoIrhMM8e2dN",
      //De link naar het rooster van de leerling. (Deze link is verkort en doet het niet)
      "url": "roosters5.gepro-osi.nl/?school=934&type=Leerlingrooster&afdeling=l_atheneum 6&leerling=16374"
  }
```
In dit geval komt `Bram van der Veen` overeen met de waarde van het variabele `name`. Maar hetzelfde geld als ik bijvoorbeeld alleen `Bram` of `van der Veen` in typ, het systeem zal alleen [meerdere ](http://werkmanrooster.nl/api/search?name=Bram)[mensen](http://werkmanrooster.nl/api/search?name=van der Veen) vinden met dezelfde waardes.  
Als rooster.io meerdere mensen vindt voor dezelfde zoekopdracht dan maakt hij een lijst zodat de gebruiker kan kiezen uit welk van de mensen hij of zij het rooster wil zien. Als er maar één persoon gevonden wordt dan gaat rooster.io verder met de volgende stap.
