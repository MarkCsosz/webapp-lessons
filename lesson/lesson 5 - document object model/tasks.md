# 5. lecke

## Document Object Model

> Elérkeztünk ahhoz a témakörhöz, amire a leginkább használják a JavaScript-et: HTML dokumentumok
dinamikus kezelése, elemek létrehozása és stílusuk módósítása. Ám mielőtt bőszen elkezdenénk kiadni
az utasításokat, sok elméleti dolgot meg kell értenünk. Ezek egy részét összeszedtem a lecke elején,
a többinek pedig ajánlott utánanézni.


### Témakörök

 + HTML5 dokumentum létrehozása, webalkalmazás könyvtárstruktúrájának kialakítása.
 + Szkript hozzáadása fájlhoz, cross-browser `domReady` függvény.
 + HTML elemek lekérdezése.
 + HTML elemek objektummodellje, tulajdonságai, stílusuk módosítása.
 + Élő kollekciók, a `NodeList` objektum.
 + HTML elemek prototípusa, a prototípus kiterjesztése, ellenjavallatok.
 
### Elméleti háttér

A HTML dokumentumot úgy kell elképzelni, mint egy családfát, amiben vannak szülők, gyermekek,
testvérek. A dokumentumot felépítő elemeket **node**-oknak nevezzük. A node-ok JavaScript objektumok.
Akárcsak a többi JavaScript-objektum, ezek is rendelkeznek prototípussal, illetve öröklődési lánccal.
A DOM fa teljes egészében eléthető JavaScript-ből, valamint programozottan módosítható, még futási
időben is.

A DOM implementációk némileg eltérnek a különböző böngészök (és böngészőverziók!) között. Erre mindig
figyelni kell. A lehetséges eltérésekhez érdemes felkeresni a Microsoft, a Mozilla és a Google
fejlesztői oldalait. Régebben az Opera Dev Network-ön is hasznos és egyedi megoldások voltak, de ők
már csak <del>a Google-t majmolják</del> a Webkit-et hegesztgetik.

### Feladatok

 1. Létrehoztam az alkalmazásunk könyvtárstruktúráját.
    
        www
        | - pages
          | - cars.html
          | - bikes.html
          | - motorcycles.html
        | - img
          | - logo.png
        | - css
          | - base.css
        | - js
          | - app.js
        | - index.html
        | - robots.txt
    
    Mire való a gyökérmappában lévő `robots.txt` fájl? Mit jelent a tartalma?    
    
 2. Az `app.js` fájlban készíts olyan függvényt, ami visszaadja a neki paraméterként megadott ID-jű
    HTML elemet! A függvény neve legyen `byId`. **Közvetlenül a függvény definíciója után** hívd meg
    azt `"magicButton"` paraméterrel!
 3. Add hozzá az `app.js` fájlt az `index.html` dokumentum `body` tag-je után! Mi történik? Miért?
 4. Most vedd ki innen a szkript betöltését, és helyezd át azt a `<head>`-be! Mi történik ilyenkor?
 5. Írj olyan függvényt, ami detektálja a DOM fa betöltési státuszát! A függvény tetszőleges számú
    paramétert képes legyen fogadni! A függvény feladata, hogy a neki paraméterként megadott
    **függvényeket** *sorrendben* lefuttassa akkor, ha a DOM betöltése befejeződött!
    
    A függvény neve legyen `domReady`.
    
    > A megoldásnál vedd figyelembe, hogy nem mindegyik böngészőben ugyanúgy történik az esemény
    hozzárendelése! **FIGYELEM!** Internet Explorerrel is működnie kell, le fogom tesztelni!
    
    > Mondanom sem kell, hogy amennyiben valamelyik paraméter nem függvény, azt le kéne kezelni.
    Kivételdobás ebben az esetben nem szükséges, jobb, ha az ominózus paramétert kihagyja a függvény.
    A legjobb megoldás érdekében bánj *tömbként* az `arguments` objektummal.
    (`Array.prototype` metódusok használata!)
    
 6. Adj meg egy *anonim függvényt* a `domReady`-nek, ami lekérdezi a `#magicButton`-t, és mint
    **objektumot** eltárolja egy változóba.
 7. Kérdezd le az eltárolt objektum *prototípus-láncát!* Tanulmányozd a prototípus-objektumokat,
    nézz utána, ezek milyen adattagokkal rendelkeznek, illetve melyik metódusuk mit csinál!
    
    Ezek után modosítsd a `#magicButton` tulajdonságait a következőképpen:
    
    1. Változtasd meg a gomb háttérszínét, illetve a szövege színét!
    2. Változtasd meg a betűtípust, a szegélyt és a belső margókat!
    3. Adj hozzá három különböző `class`-t.
    4. Tüntesd el, majd jelenítsd meg újra az oldalon.
    5. Helyezz el rajta egy *képet* (mondjuk lehet a `logo.png`)!
    6. Készíts róla három másolatot, majd ezeket szúrd be az eredeti gombbal *azonos szintre* a
    DOM-ban!
    
    > Az utolsó feladat működni fog, de valamiért nem lesz az igazi. Miért? Próbáld csak meg a
    klónozás után módosítani valamelyik klón tulajdonságait és rájössz, mi a bibi!
    
 8. Kérdezd le az oldalon található *összes* bekezdést, a listát tárold el egy változóba!
 
    > A lekérdezésre többféle módszer is kínálkozik, de mindegyik más-más adatstruktúrával tér
    vissza. Azt válaszd, amelyikkel meg tudod oldani a feladat többi részét!
    
    A listához adj hozzá egy *új bekezdést* úgy, hogy az azonnal megjelenlen a felületen.
    
    Az újonnan hozzáadott elem **külön lekérdezése nélkül** módosítsd annak valamelyik tetszőleges
    stílusát (pl. betűszín, szöveg igazítása, ...)!
 
    A változtatott stílust ezután alkalmazd az **összes hasonló elemre**!
    
    > Hasonló elem: a kijelölt elemmel azonos szinten lévő, ugyanolyan tag-gel leírt elem.
    
 9. Az előző feladatban lekért *html collekció*-hoz adj hozzá három függvényt:
 
    + `show`: a kollekcióban szereplő összes elem megjelenítése a képernyőn.
    + `hide`: a kollekcióban szereplő összes elem elrejtése.
    + `toggle`: elrejtés/megjelenítés váltása.
    
    A megírt függvényeket próbáld ki konzolon.
 
 10. Szerinted mik az előnyei/hátrányai a HTML elemek prototípus-kiterjesztésének? Hozz fel példát
    mindegyik esetre!


### Tipp

 + Figyeld meg a könyvtárstruktúrámat! Nincs `inner` mappa. Ennek praktikus oka van. Gondolj bele:
    
        <script type="text/javascript" src="inner/js/app.js"></script>
        
    Versus:
    
        <script type="text/javascript" src="js/app.js"></script>
        
    Szerinted melyik HTML fájl töltődik be gyorsabban? Naná, hogy a második. (Kevesebb karakter
    gyorsabban átmegy a hálózaton, és ez napjainkban, a mobilalkalmazások korában kiemelten fontos
    szempont! Még ha csak pár byte-ról van is szó, mobilinterneten minden számít!)
    
    Ha jól értelmeztem, azért használtad ennyi időn keresztül ezt a struktúrát, mert ezzel akartad
    jelezni, hogy az `inner` mappában azok a dolgok vannak, amiket te csináltál, és majd talán az
    `outer` nevű mappában lesznek a harmadik féltől származó cuccok. Elárulom, hogy lehetne így is,
    de mi erre a célra majd CDN-eket (Content Delivery Network) fogunk használni, azaz a külső
    JS library-kat nem mi fogjuk hosztolni, hanem mondjuk a Google. Georeplikáció és más szempontok
    is jobbá teszik ezt a megoldást.

