# Templates
---
## Roosters en webpagina's als koekjesvorm

## Waarom moeilijk doen als het ook makkelijk kan?
Je hebt tot nu toe gelezen wat er allemaal gebeurd als je rooster wordt opgevraagd. In de allerlaatste stap mogen we ons druk gaan maken over de opmaak van het rooster en Werkmanrooster. Dit wordt gedaan aan zogenaamde "templates", een soort koekjesvorm.

Wat is een template eigenlijk? Een template is een versimpelde progammatuur in een bepaalde structuur geschreven, vaak om het leesbaar te maken voor mensen. Je geeft een template een set van informatie, dit template gaat dan aan de hand van hoe het geschreven is, de informatie op een bepaalde manier laten zien. Het is als een soort van koekjesvorm omdat je eigenlijk de informatie behandelt als deeg. Je hebt heel veel deeg, maar uiteindelijk druk je er allemaal verschillende vormpjes uit waardoor je koekjes er anders uit komen. Zo kan Werkmanrooster snel en simpel een rooster van heel veel verschillende mensen ophalen en laten zien, zonder elke leerling apart in te programmeren.

---

## Formules en functies.
Hoe een template werkt, is te vergelijken met wiskundige formules. Je hebt een standaard manier van werken met een variabele. We nemen als voorbeeld de formule `y = x + 2`. Iedereen weet wat er gebeurd met `y` als je `x` veranderd. `y` is dan gewoon `x` plus twee erbij. Bij templates werkt het vrijwel hetzelfde, maar in plaats van een wiskundige formule, is het een hele lange formule die niet alleen cijfers kan verwerken maar ook woorden en zinnen. Ik kan bijvoorbeeld iemand groeten die zijn rooster bezoekt door het variabele van zijn naam te gebruiken in zo'n template.

```jade
p Hallo #{naam}, hoe gaat het met jou?
```

Ik voer dan voor het variabele `naam` dan de naam van de rooster opvrager in. Op die manier krijg ik dus bijvoorbeeld `Hallo Bert, hoe gaat het met jou?` als het variabele `naam` gelijk staat aan `Bert`. Deze templates zijn echter geschreven in een taal die dit soort vergelijkingen makkelijk leesbaar maakt voor de programmeur. Ik heb voor rooster.io gekozen voor de taal `Jade`. `Jade` kan veel handige dingen, zoals het importeren van templates in een ander template, waardoor je een project modulair kan aanpakken. Laten we eens bekijken hoe zo'n template er uit ziet.

```jade
.bar
  //- Als het variabele 'user' bestaat (Er is ingelogd)
  if user
    //- Laat dan het volgende zien
    ul.left
      li Hey, #{user.naam}
      li |
      li
        a(href="/rooster/#{user.id}") Jouw Rooster
      li
        a(href=user.rooster, target="_blank") Andere roostersite
    ul.right
      li
        a(href="/logout") Logout
  //- Als er niet is ingelogd
  else
    //- Laat dan het volgende zien
    ul
      li
        a(href="/login") Login
      li |
      li
        a(href="http://hoewerkt.Werkmanrooster.nl", target="_blank") Hoe werkt Werkmanrooster?
    ul.right
      li
        a(href="http://git.Werkmanrooster.nl/Werkmanrooster/rooster-io.git", target="_blank") Recente ontwikkelingen
```

Dit template zorgt voor de kleine rode of blauwe bar aan de bovenkant van elke Werkmanrooster pagina. Wat hier belangrijk is, is de evalutatie van het variabele `user`. Dit variabele bepaalt namelijk hoe de pagina er uit gaat zien. Als het variabele `user` niet bestaat (en er dus niet is ingelogd), dan ziet de gebruiker een login knop. Als de gebruiker wel is ingelogd (het variabele `user` bestaat) dan wordt dat variabele gebruikt om een groet aan de gebruiker te laten zien.

Alle in het rood gekleurde letters en woorden die je aan het begin van elke regel ziet staan zijn verschillende `HTML` elementen. Elke webpagina bestaat uit `HTML` en nog een taal genaamd `CSS`. `HTML` is ervoor om een duidelijke structuur aan de pagina te geven met verschillende ëlementen". Deze elementen kunnen een vormgevende functie of een inhoudelijke functie hebben. In het voorbeeld hierboven maken we bijvoorbeeld gebruik van het element `a` die als een link fungeert zodat de gebruiker naar een andere website kan als hij op de link klikt. Het is niet al te belangrijk om te weten wat het meeste er van betekent.

Het volgende wat we gaan bekijken is de template voor het renderen van een rooster uit een database bestand.
```jade
//- Andere templates die nodig zijn voor de pagina
include header
include search

.schedule
  //- Ga elke dag in het rooster langs
  each day in schedule
    .day
      //- Ga elk uur in de dag langs
      each hour in day
        //- Als er niet 'vrij' staat op de plek van een uur
        if hour.teacher != 'vrij'
          .hour(class=(hour.changed == 'true' ? 'changed' : ''))
               span.teacher
                  a(href=hour.teacher) #{hour.teacher}
               span.chamber
                  a(href=hour.chamber) #{hour.chamber}
               span.course= #{hour.course}
        //- Staat er wel 'vrij', dan laat het uur vrij zijn! (yay)
        else
          .hour.changed
            span.free Vrij
```

Je zou denken dat hier niet zoveel gebeurd. Laten we kijken naar een van de `keywords` die we een paar keer zien. Je ziet helemaal aan de bovenkant een paar keer `include` staan met daar achter een ander woord. `include` zorgt ervoor dat wij andere templates kunnen importeren zoals `search` wat in ons geval de zoekbalk is die op elke pagina van Werkmanrooster staat.

Dan is er nog `each`. `each` is een keyword waarmee de programmeur zegt 'voor elke', dat wil zeggen, als een data object meerdere dingen bevat kan hij ze op die manier langs gaan. Het is hetzelfde wanneer je een ballenbak hebt en de kleuren wil sorteren. De ballenbak is dan het dataobject. Je zegt dan bijvoorbeeld  dat voor elke bal die ik hier uit pak, gaat de groene naar links en de rode naar rechts. En je pakt alle ballen uit de ballenbak totdat je allemaal gehad hebt. Hetzelfde gebeurd hier. Iedere keer als het `each` `keyword` word gebruikt gaat hij alle mogelijke dingen langs totdat hij klaar is. Hier kun je bijvoorbeeld zien bij de eerste `each` dat hij elke dag in het rooster langs gaat en dat hij vervolgens elke dag ook nog alle uren langs gaat. Op deze manier komen alle dagen en uren aan bod!

---
[Volgende  >>](/database)
