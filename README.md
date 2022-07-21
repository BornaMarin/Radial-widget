# Radial-widget
Radial widget with native Canvas Api, React

start projet<br />
-git clone https://github.com/BornaMarin/Radial-widget.git<br />
-cd directory<br />
-git checkout develop<br />
-npm i<br />
-npm start<br />

koristena verzija node-a 16.16.0<br />

Par stvari zelim istaknuti<br />

Napravio sam custom Storybook pomocu MUI componeneta, nisam odvajao u componentu.. koristi se samo da mozete testirati propove, review nije potreban :D.. u App.tsx fileu je relevantna samo  RadialWidget componenta!<br />
Takoder nisam davao paznju css-u, u zadatku ga je bilo minimalno.. nabacio sam samo inline style gdje je bilo potrebno<br />
Propovi nemaju validaciju u odnosu na druge propove, ocekuje se od Usera da si sam prilagodi widget kako mu pase, mislim na overlapping etc..<br />
Imam par stvari u kodu koje mislim da nisu bas React way of doing things, naknadno cu ih testirati prije tehnickog interviewa na drugom branchu<br />
<br />
Sto se tice samog zadatka, koristio sam layering canvasa kao optimizaciju, podigne nam framerate jer nije potrebno reRenderati cijeli content Widgeta ako vecina crteza ne ovise o odredenom propu(tipa raw value)<br />
Kad se budete igrali sa propovima, nece se svaki canvas reRenderati na single prop change, preporucujem na svaku promjenu triggerati Slider Radial Value kako biste dobili tocan prikaz Radial Widgeta nakon promjene propova
<br />

![image](https://user-images.githubusercontent.com/55488146/180285419-397ae70c-e37f-487e-b143-af170bf6b2fc.png)

Posto nisam dodavao poseban css, projekt je najbolje otvoriti na screenu sirine 1200px +.<br />

Ostatak bi trebao biti selfExplanatory.






