## Conclusie en samenvatting
---
Nou dat was een klein reisje wat we gemaakt hebben. We begonnen bij een broodjeszaak en we eindigen met het maken van onze eigen data-gedreven applicatie. Heel veel termen, concepten en andere dingen zijn langsgekomen. We hebben ook verschillende nieuwe dingen geleerd: hoe het internet werkt, wat data-gedreven applicaties zijn en hoe Werkmanrooster werkt.  

<sup>Elk hoofdstuk heeft een aparte conclusie en het herhalen van al die conclusie is een samenvatting, vandaar dat deze onderdelen zijn samengevoegd.</sup>

---

##### Summary
Werkmanrooster or [rooster.io](http://github.com/96aa48/rooster.io) is a data-driven webapplication. This application works by [extracting information](/database) from the school [schedule website](http://roosters5.gepro-osi.nl/roosters/rooster.php?school=934). The extracted information is put into a [database](/opzoek) for storage and easy access.

When a user connects to the website, multiple processes are at work to make sure that the information from the Werkmanrooster servers reaches the user. One of these processes is [`DNS`](/telefoonboek) or "Domain Name System", it translates domain names (`werkmanrooster.nl`) into an IP address so that the user can connect to the preferred server.

When the user gets to the website and types in his or her name, rooster.io starts a set of processes in order to supply the user with his or her schedule. First, the name typed into the search bar is used to [go through](/opzoek) the previously [established database](/database). When a match is found, the  matched [database information](/opzoek) is used to acquire a link to the schedule on the school [schedule website](http://roosters5.gepro-osi.nl/roosters/rooster.php?school=934). The link is then used to download the user's schedule information. The downloaded information is then sorted to make it computer readable. The now computer readable information is then put into a [template](/templates) for design and consistency.

---
[Volgende >>](/nawoord)
