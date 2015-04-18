# 3. lecke

## Osztályok, objektumok, öröklődés

> Ebben a leckében az objektumorientált programozás JavaScript-es sajátosságait
fogod elsajátítani. A példa kedvéért autókkal fogunk játszadozni, mert ezek
olyan, a való életben is összetett dolgok, amiket jól lehet modellezni (és mert
hirtelen nem jutott eszembe jobb példa..)

### A feladat

Egy olyan programot kell írnod, amely egy autókereskedést szimulál. Az üzletben
lehet használt és új autókat is venni, illetve túladni azokon. Maga a program
az autók nyilvántartását, az adatok rendszerezését fogja végezni.

Az itt leírt feladatokkal **sorban haladj**, a komolyabb rész (UI készítése a
kereskedői felülethez) most még nem lényeges, csak a logika.

1. Hozz létre több gépkocsit jelképező objektumot **literális formában**, ezeket
tárold külön változókban. Minden példány rendelkezzen a következő adattagokkal:

    + `brand`: `string`, az autó márkája (pl. Mitsubishi)
    + `model`: `string`, az gépkocsi kódneve (pl. Lancer EVO)
    + `production`: `int`, a gyártás éve
    + `isNew`: `boolean`, az autó új-e vagy használt
    + `price`: `number`, az autó ára
    + `toString`: `function`, az autó márkáját és a kódnevét fésülje össze egy
    szóközzel! (ezek az értékek legyenek beégetve a függvényben!)
    
    Minden objektumpéldányban legyen kitöltve az összes mező!

2. Helyezd el a létrehozott objektumokat egy tömbben, majd rendezd a tömböt a
gyártás éve szerinti csökkenő sorrendbe. A rendezett tömböt írasd ki a konzolra.

3. Mik az előnyei/hátrányai a literáléis formának JS objektumok esetén?

4. Készíts **konstruktort**, ami `Car` típusú objektumokat hoz létre! Adattagjai
legyenek ugyanazok, mint az első feladatban megadott literálnak. A konstruktorban
csak az autó márkájának és modelljének megadása legyen kötelező.

5. Írd át a `toString` metódusokat úgy, hogy benne le legyenek beégetve az
ominózus értékek!

6. Oldd meg, hogy minden `Car` objektum egy `Vehicle` nevű "absztrakt osztályból"
származzon! A `Vehicle` két adattaggal rendelkezzen:

    + `numberOfWheels`: `int`, a jármű kerekeinek száma.
    + `fuelType`: `string`, az üzemanyag típusa.
    
    Mindkét adattag megadása legyen kötelező a konstruktorban!

7. Kezeld le a `Vehicle` hibás példányosítását! (pl. ha nulla kerekű vagy nem
megadott típusú üzemanyag esetén **dobjon hibát** a program. A hibaüzenet lehet
tetszőleges, pl. ön nyert egy f*szt a szájába, ezt rád bízom :-))

8. Próbáld meg beállítani a `Car` osztály ősosztályának a `Vehicle` absztrakt
osztályt. Ha lehet, mutass be több alternatívát erre.

9. Hozz létre `Motorcycle`, `Bike` osztályokat tetszőleges, rá jellemző
adattagokkal. Állítsd be nekik is ősosztályul a `Vehicle` osztályt.

10. Készíts több példányt `Car`, `Motorcycle` és `Bike` objektumokból, ezeket
helyezd el egy közös objektumtömbben. Szűrd ki egy külön tömbbe a kerékpárokat
(`Bike`), és írasd ki a konzolra.

11. Hozz létre egy `Engine` nevű osztályt, melynek legyenek adattagjai:

    + `brand`: `string`, a motort gyártó cég neve
    + `fuelType`: `string`, üzemanyag típusa
    + `displacement`: `number`, lökettérfogat
    + `strokes`: `int`, ütemek száma
    + `performance`: `number`, teljesítmény (mondjuk kilowattban)
    
    A konstruktorban a `performance` megadása legyen kötelező! Legyen
    típusellenőrzés (nulla vagy negatív, esetleg nem szám értékekre dobjon hibát).

12. A járműveket tartalmazó tömb `Car` típusú elemeihez hozz létre egy adattagot
`engine` névvel. Az adattag legyen az `Engine` osztály egy példánya. Az autó és
a motor `brand` adattagja vegye fel ugyanazokat az értékeket (pl minden Mitsubishi
kocsiban Mitsubishi gyártmányú motor legyen.) Az `Engine` összes adattagja legyen
kitöltve, a számértékekhez használhatod a korábban megírt `randInt` függvényemet.

13. Az autókat válogasd szét egy külön tömbbe, majd rendezd őket teljesítmény
szerinti csökkenő sorrendbe. Írd ki konzolra.

14. Az `Engine` osztályhoz utólag adj hozzá egy függvényt, amely a kilowattban
megadott teljesítményt átkonvertálja lóerőre!

15. A kizárólag autóket tartalmazó tömb külön módosítása nélkül hívd meg az előző
feladatban megírt függvényt a tömb minden elemének motorjára. Működik / nem
működik? Miért? (próbáld meg saját szavaiddal elmagyarázni)
