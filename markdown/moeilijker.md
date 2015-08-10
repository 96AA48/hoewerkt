##Moeilijker
---
Hoewel veel van het process is uitgelegd in [de broodjeszaak](/broodjeszaak.md) is er meer aan de hand dan alleen het vragen van informatie en het krijgen hier van. Werkmanrooster of hoe ik het noem [rooster.io](http://git.werkmanrooster.nl/werkmanrooster/rooster-io), bestaat uit iets genaamd '`code`'. Deze code beschrijft wat een computer moet doen en wanneer. Deze code zorgd ervoor dat een computer bepaalde afwegingen maakt, bijvoorbeeld dat hij een [lijst geeft van meerdere leerlingen als er meerdere zijn gevonden](http://werkmanrooster.nl/rooster/bram) in plaats van het weergeven van [een rooster](http://werkmanrooster.nl/rooster/Bram van der Veen). Deze afwegingen komen veel voor in de `code` van rooster.io.

Zo'n afweging ziet er als volgende uit in `code`.

```javascript
//leerlingen.length wil zeggen hoeveel leerlingen er zijn.
if (leerlingen.length > 1) {
  //Code voor het maken van een lijst.
}
else {
  //Code voor het laten zien van een rooster.
}
```
