# My first chatroom

In deze deeltaak i) zet je een voorbeeld van een chatroom live op jouw eigen Adaptable of Railway omgeving en ii) vertaal je de algemeen opgemaakte chatroom naar de huisstijl van jouw opdrachtgever.

## Context

Deze leertaak hoort bij sprint 11 "Connecting People". Dit is een deeltaak die je individueel uitvoert.

In de workshop S11W1-02-My-first-chatroom wordt de opdracht en de werkwijze uitgelegd.

## Doel van deze opdracht

Je leert in deze deeltaak kleine aanpassingen maken aan een realtime webapp. Daarna leer je de huisstijl van een opdrachtgever toe te passen op deze webapp. Als je tijd over hebt zijn er een aantal uitdagingen, je voegt dan functionaliteit toe aan de chatroom die je als basis krijgt.

## Werkwijze

Opdracht: de huisstijl van een opdrachtgever implementeren op een bestaande chatroom.

Deze opdracht gaat over de volgende fases van de DLC: [ontwerpen](#ontwerpen), [bouwen](#bouwen), [integreren](#integreren). We slaan ditmaal de analysefase over en gaan snel aan de slag.

### Ontwerpen

In de ontwerpfase denk je na over de vormgeving van de basis chatroom. Laat je hierbij leiden door de huisstijl van jouw opdrachtgever.

1. Maak een snelle schets (niet langer dan 10 minuten!) van een basis chatroom. Kijk goed naar de huisstijl van de opdrachtgever en gebruik de juiste kleuren, layout en typografie. je hebt in ieder geval nodig:
    - Een lijst met berichten
    - Een tekstvak om te typen
    - Een knop om te versturen

### Bouwen

In de bouwfase realiseer je de zojuist ontworpen chatroom. Je laat je hierbij in eerste instantie leiden door het voorbeeld wat tijdens de werkgroep is uitgelegd. Daarna kan je extra functionaliteit toevoegen…

1. Installeer Express en zet een omgeving op. Deel bestanden via de ```./public/``` map of gebruik EJS voor templating.
2. Implementeer jouw eerste chatroom op dusdanige wijze dat deze geserveerd wordt door Express. (Uit je public map of via een route)
3. Zet socket.io op en maak een basic real-time chatroom welke gebruik maakt van sockets. Minimaal kan een client een bericht sturen welke een *round-trip* maakt naar alle verbonden clients. Je kunt het voorbeeld uit de les gebruiken voor inspiratie!
5. (Optioneel) Voeg extra functionaliteit van onderstaande lijst toe. Doe dit een stapje tegelijk, zoek naar voorbeelden en vraag hulp als je dat nodig hebt. De functionaliteit gaat van eenvoudig naar ingewikkeld.
	- Voeg support toe voor het kiezen van een *nickname* en gebruik dit bij het versturen van berichten.
	- Verstuur (emit) een event als iemand *connect* of *disconnect*.
	- Voeg *{gebruiker} is aan het typen* functionaliteit toe.
	- Laat zien wie er online is.
	- Voeg *private messaging* toe.

#### Materiaal bouwfase

- [Express](https://expressjs.com/en/4x/api.html)
- [socket.io](https://socket.io/)
- [live coded example](https://github.com/ju5tu5/barebonechat)
- [chat demo from socket.io](https://socket.io/get-started/chat/)

### Integreren
*In de integratiefase voer je de aanpassingen door zodat iedereen ze kan zien.*

1. Zorg dat je jouw app *deployed* via Adaptable of Railway.
2. Voeg aan jouw ```Readme.md``` een link naar je live-demo en een screenshot toe. Beschrijf ook welke extra functionaliteit je toegevoegd hebt.
3. Laat het resultaat in een checkpoint aan een squad-leader of co-teacher zien.

#### Materiaal integratiefase

- [Adaptable.io](https://adaptable.io/)
- [Railway](https://railway.app/)

## Criteria
*Definitions of done*

Focus sprint 11 - De focus van deze sprint ligt op het maken van multi-user omgeving door het opzetten van een real-time verbinding tussen client en server. 

### Deze leertaak hoort bij het gedragscriterium:

P: Je combineert aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving om een passende oplossing voor een opdrachtgever te realiseren.  
L: Je maakt aangeboden en zelf gevonden materie eigen en gebruikt dit bij leertaken, deelt ervaring binnen de squad.

Deze opdracht is done als:

[ ] - De chatroom staat live en is opgemaakt naar de huisstijl van een opdrachtgever.
