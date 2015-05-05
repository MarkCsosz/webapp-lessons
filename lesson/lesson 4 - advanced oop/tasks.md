# 4. lecke

## Haladó objektumorientált programozás

> Eleddig sikerült elsajátítani a JS objektumorientált alapjait. Most az OOP ismeretek kibővítése 
kerül terítékre. Ehhez az előző leckében elkezdett feladatokat fogjuk folytatni.

> Tudom, hogy azt ígértem, hogy ebben a leckében már fogunk valamit foglalkozni a UI elemekkel is,
viszont még az OOP terén vannak hiányosságok, amiket tudni kell ahhoz, hogy továbbléphessünk. Ezért
ez a lecke remélhetőleg ugyanolyan tanulságos lesz, mint az eddigiek.

### Témák

 - Prototípus-lánc meghatározása
 - A `constructor` adattag
 - Natív objektumok kiterjesztése, metóduskölcsönzés
 - Statikus osztályszintű változók és metódusok
 - Névterek

### Feladatok

 1. Készíts konstruktort a következőkhöz:
    
    - `MitsubishiLancer` <- `Car` (Azaz a `Car` legyen az ősosztálya)
    - `RenaultFluence` <- `Car`
    - `Wartburg353` <- `Car`
    
    A prototípus(oka)t állítsd be a gépjárműveknek megfelelő értékekre, és ez esetben kérlek _valós_
    értékeket adj meg (tehát ne legyenek kamu adatok pl a teljesítmény mezőben).
    
    Hozz létre egy közös objektumtömbbe példányokat ezekből a járművekből.
    
 2. Írj függvényt, ami visszaadja a neki paraméterként megadott objektumpéldány **prototípus-láncát**!
    A függvény az alábbiak szerint működjön:
    
        var anOldCar = new Wartburg353();
        getPrototypeChain(anOldCar); // [Wartburg353, Car, Vehicle, Object, null]
        
    A visszaadott érték tömb legyen, benne a _konstruktorok_ (vagy a konstruktorok nevének megfelelő
    _stringek_) az öröklődési lánc szerinti sorrendben.
    
    > Tipp: hátultesztelő ciklus és Object.getPrototypeOf, vagy rekurzív függvény.
    
 3. Az előző lecke megoldásában láttam nálad ilyeneket:
    
        Car.prototype = new Vehicle;
        Car.prototype.constructor = Car;
        
        Bike.prototype = new Vehicle;
        Bike.prototype.constructor = Bike;
        
    Volt-e valamilyen oka annak, hogy a `Car.prototype.constructor` adattagot `Car`-ra állítottad?
    Mi a szerepe ennek az adattagnak? (Google!)
    
    Mi a különbség a `new Vehicle;` és a `new Vehicle()` között?
    
 4. Tegyük fel, hogy belenyúlok a kódba, és ezt követem el:
    
        var myCar = new Car("Honda", "Jazz");
        myCar.toString(); // 1.
        myCar.prototype.constructor = {};
        myCar.toString(); // 2.
        myCar.prototype = null;
        myCar.toString(); // 2.
        
    Mi lesz az eredménye az 1., 2. és 3. kódnak? (A kód kipróbálása előtt próbáld megfogalmazni a
    választ, majd azt vesd össze a kipróbálás eredményével)
    
 5. Készíts saját **adatstruktúrát** `VehicleContainer` névvel, melyben járműveket tárolhatsz! A
    struktúra alapja legyen a beépített `Array` objektum! (ősosztály!)
 6. A `VehicleContainer` objektumban csak `Vehicle` típusú elemeket engedj meg! (úgy képzeld el,
    mint C#-ban a típusos tömböket, amik nem engedik meg, hogy a típustól eltérő elemek is
    belekerüljenek. Ha ez mégis előfordulna, **dobjon hibát** a program.)
 7. Tedd lehetővé, hogy az 1. feladatban megadott tömböt elfogadja a `VehicleContainer` konstruktora,
    és átalakítsa azt a tömböt a saját típusára!
 8. Adj hozzá a `VehicleContainer` osztályhoz egy `filterByType` metódust! A metódus bemenő
    paramétere legyen egy **konstruktor**. A függvény feladata, hogy a `VehicleContainer` példányban
    azokat az elemeket adja vissza, melyek példányai a paraméterként megadott konstruktornak!
 9. Az előző feladatot egészítsd ki úgy, hogy a függvény `VehicleContainer` típusú változót adjon
    vissza eredményül!
 10. Egészítsd ki a `Vehicle` osztály konstruktorát egy **statikus változóval**, amely azt számolja,
    hogy a konstruktor hány alkalommal lett meghívva! A változó neve legyen `count`.
 11. Kérdezd le a `Vehicle.count` változót. Mi lesz az értéke? Miért?
 12. Szervezd **névterekbe** az eddigi kódokat a következők szerint:
 
    - `Models` - ez tartalmazza a _konstruktorokat_
        - `Vehicle`
        - `Car`
        - `Motorcycle`
        - `Bike`
        - `Wartburg353`
        - `RenaultFluence`
        - `MitsubishiLancer`
    - `Helpers` - ebben legyenek a _segédfüggvények_
        - `getPrototypeChain`, `randInt`, és a többiek
    - `UI` (egyelőre legyen üres)
    - `API` (egyelőre legyen üres)
    
    Az összes definíció **csak a névtereken belül legyen elérhető!** (azaz ne tudjam meghívni a
    `new Vehicle()` kódot, csak így: `new Models.Vehicle()`.)

### Tippek

 - Ezúttal tényleg sorrendben haladj a feladatokkal, a dolgok megértéséhez fontos az időrendiség!
 - Hozz létre egy `www` nevű mappát _**ebben a könyvtárban**_, és ott dolgozz! Ne hozz létre külön
 `lesson 4` nevű mappát, a feladatok és a megoldás szorosan összetartoznak!
 - Vesd össze az én megoldásomat a sajátoddal, és mérlegeld, hogy melyiket lenne érdemes alapjául
 venni a feladatok megoldásának.
 - A feladathoz **továbbra sem lesz UI** (bocs...), az előző feladat fájljait (amiket áthelyeztem a
 `lesson 3 - classes, objects/www` mappába) egy az egyben átmásolhatod ugyanilyen struktúrában ide,
 az index.html-hez hozzá sem kell nyúlnod. Az adatbevitelt és kiírást is a konzolon végezd! (Esetleg
 készíthetsz doksit a konzolról a lecke `console` mappájában.)
