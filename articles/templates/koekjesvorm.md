#### Roosters en webpagina's als koekjesvorm
---

#### Waarom moeilijk doen als het ook makkelijk kan?
Je hebt tot nu toe gelezen wat er allemaal gebeurd als je rooster wordt opgevraagd. In de allerlaatste stap mogen we ons druk gaan maken over de opmaak van het rooster en Werkmanrooster. Dit wordt gedaan aan zogenaamde "templates", een soort koekjesvorm. 

Wat is een template eigenlijk? Een template is een versimpelde progammatuur in een bepaalde structuur stopt, vaak om het leesbaar te maken voor mensen. Je geeft een template een set van informatie, en dit template gaat dan aan de hand van hoe het geschreven is, de informatie op een bepaalde manier laten zien. Het is als een soort van koekjesvorm omdat je eigenlijk de informatie behandelt als je deeg. Je hebt heel veel deeg, maar uiteindelijk druk je er allemaal verschillende vormpjes uit waardoor je koekjes er anders uit komen. Zo kan Werkmanrooster snel en simpel een rooster van heel veel verschillende mensen ophalen en laten zien, zonder elke leerling apart in te programeren.

---

#### Formules en functies.
Hoe een templaat werkt, is te vergelijken met wiskundige formules. Je hebt gewoon een soort standaard manier van werken met een variabele. We nemen als voorbeeld de formule `y = x + 2`. Iedereen weet wat er gebeurd met `y` als je x veranderd. `y` is dan gewoon `x` plus twee erbij. Bij templates werkt het vrijwel hetzelfde, maar in plaats van een wiskundige formule, is het een hele lange formule die niet alleen cijfers kan verwerken maar ook woorden en zinnen. Ik kan bijvoorbeeld iemand groeten die zijn rooster bezoekt door het variabele van zijn naam te gebruiken in zo'n templaat.

```jade
p Hallo #{naam}, hoe gaat het met jou?
```
  
Ik voer dan voor het variabele `naam` dan de naam van de rooster opvrager. Op die manier krijg ik dus bijvoorbeeld `Hallo Bert, hoe gaat het met jou?` als het variabele naam gelijk staat aan `Bert`. Deze templaten zijn echter geschreven in een taal die dit soort vergelijkingen makkelijk leesbaar maakt voor de programeur, ik heb voor `rooster.io` gekozen voor `Jade`. `Jade` kan veel handige dingen zoals het importeren van templaten in een ander templaat, waardoor je een project modulair kan aanpakken. Laten we eens bekijken hoe zo'n templaat er uit ziet.

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
        a(href="http://hoewerkt.werkmanrooster.nl", target="_blank") Hoe werkt Werkmanrooster?
    ul.right
      li
        a(href="http://git.werkmanrooster.nl/werkmanrooster/rooster-io.git", target="_blank") Recente ontwikkelingen
```

Dit templaat zorgt voor de kleine rode of blauwe bar aan de bovenkant van elke Werkmanrooster pagina. Wat hier belangrijk is, is de evalutatie van het variabele `user`. Dit variabele bepaald namelijk hoe de pagina er uit gaat zien. Als het variabele `user` niet bestaat, en er dus niet is ingelogd dan word de gebruiker een login knopje laten zien. Als de gebruiker wel is ingelogd (het variabele `user` bestaat) dan wordt dat variabele gebruikt om een groet aan de gebruiker te laten zien.

---
[Volgende  >>](/database)

