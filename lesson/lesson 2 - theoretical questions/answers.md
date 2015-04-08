# Válaszok

 + Legyen két változó, melyek egy személy vezeték-és keresztnevét tartalmazzák. Hogyan lehet ezeket összefűzni egy szóközzel? Mik az összefűzés feltételei?

        var surname = "László";
		var firstName = "Fogas";
		
		// 1. megoldás - Összefűzés helyben
		surname + " " + firstName
		
		// 2. megoldás - összefűzés külön változóba
		var name = surname + " " + firstName;
		
		// 3. megoldás - Tömbelemek összefűzése
		var name = [surname, firstName].join(" ");
		
    Az összefűzés feltétele, hogy mindkét változó string típusú legyen, máskülönben a típuskényszerítés miatt rossz eredmény születik.
		
 + Van egy tíz elemet tartalmazó tömb. Hogyan tudjuk eldönteni, hogy a tömb elemei növekvő sorrendben vannak?
 
    Akkor tekinthetünk rendezettnek egy tömböt, ha annak elemeit egy bizonyos sorrendben bejárva ugyanaz a reláció áll fenn az összes elem között.
	Ebből adódik, hogy végig kell mennünk az összes tömbelemen, hogy bebizonyítsuk a rendezettséget.
	
	    var unsorted = [9,2,4,6,33];
		var sorted = [1,8,9,33,765];
		
		// Mindenképpen függvényt kell írni, amely visszaadott értéke egy logikai változó.
		// Ez a változó jelzi, hogy a tömb rendezett vagy sem.
		function isSorted(arr){
			var direction; // A kedzetben beállított irány.

			for(var i = 1; i < arr.length; ++i){
				console.log(arr[i-1], arr[i]);
				
				var currentDirection = ( arr[i] <= arr[i-1] ) ? 1 : -1; // Vizsgálat növekvő sorrend szerint.
				if(direction === undefined){
					direction = currentDirection;
				}
				else if(direction != currentDirection){ // Megváltozik a reláció iránya, nem rendezett tömb.
					return false;
				}
			}

			return true;
		}
		
		isSorted(unsorted);   // false
		isSorted(sorted);     // true
 
 + Mik a feltételei annak, hogy két objektum tulajdonságait egy objektumban egyesítsük? Mi történik azokkal a tulajdonságokkal, amelyek több objektumban is szerepelnek? Hogyan védekezhetünk a lehetséges mellékhatások ellen?

    A jQuery `extend` nevű függvénye erre való.
	
	    var obj1 = {
			foo: "bar"
		};
		var obj2 = {
			foo: "baz",
			magic: "yeah"
		};
		
		function mixin(destination, source){
			for(var key in source){
				destination[key] = source[key];
			}
			return destination;
		}
		
		mixin(obj1, obj2); // {foo: "baz", magic: "yeah"}
		
	Az azonos nevű tulajdonságok felülírják egymást.
	A _nem megszámlálható_ (`enumerable = false`) tulajdonságokon a for ciklus nem megy végig. Védekezés: saját itetáror írása. (majd később)
	

 + Lehetséges-e JavaScript-ben a többszörös rendezés (rendezés több attribútum szerint, bizonyos sorrendben)? Ha igen, mik ennek a feltételei, és hogyan valósítanál meg egy ilyen rendezést? Példát is írj!
 
    Igen, lehetséges. Ennek feltételei, hogy:
	
	+ Olyan entitásoknak kell rendelkezésre állni, amelyek több adattaggal rendelkeznek. (jelesül **objektumoknak**)
	+ Ezen objektumok mindegyikének rendelkeznie kell azokkal a tulajdonságokkal, amelyek alapján a rendezés történik.
	+ Az objektumok egy **tömbben kell, hogy legyenek** (hiszen tömböket tudunk rendezni)
	
	Példa:
	
	    var mySkills = [
			{
				"language": "Python",
				"years": 4
			},
			{
				"language": "Java",
				"years": 1
			},
			{
				"language": "C++",
				"years": 1
			},
			{
				"language": "JavaScript",
				"years": 10
			},
			{
				"language": "C#",
				"years": 4
			}
		];
		
		// Rendezés évek szerint csökkenő, azon belül név szerint növekvő sorrendbe.
		
		mySkills.sort(function(skillA, skillB){
			if(skillA.language < skillB.language){
				if(skillA.years > skillB.years)
					return -1;
				if(skillA.years < skillB.years)
					return 1;
				return 0;
			}
			if(skillA.language > skillB.language){
				if(skillA.years > skillB.years)
					return -1;
				if(skillA.years < skillB.years)
					return 1;
				return 0;
			}
			
			return 0;
		});
		
		console.log(mySkills); // Ta-daaaaa!
 
 + Hogyan tudjuk eldönteni egy változó típusát JavaScript-ben?

        var myType = typeof akármi;
		
    Azaz röviden: a `typeof` **operátorral**. (operátor, nem függvény! Azaz sok böngészőben működik a `typeof(valami)`, de ne építsünk erre.)
 
 + Hogyan tudunk típpusellenőrzést csinálni JavaScript-ben?
 
    A `typeof` **stringként** adja vissza a típust, ami lehet:
	
	+ `number`
	+ `boolean`
	+ `string`
	+ `object`
	+ `function`
	+ `undefined`
	
	Ezt kell kombinálni a `typeof` operátor eredményével.
	
	    var nevem = "Chuck Norris";
		
		if(typeof nevem != "string"){
		    console.log("Baj van...");
		}
		
	Ennél valamivel pontosabb megoldás, ha a feltétel jobb oldalára is olyan `typeof` utasítást teszünk, ami egy elemi objektum típusát adja vissza.
	
		var nevem; // Értéke ekkor undefined!
		
		if(typeof nevem === typeof undefined){ // "undefined" === "undefined"
			console.log("Maga mit mér?");
		}
	
	De vigyázat!
	
	    typeof Array    // "function"
		typeof Boolean  // "function"
		typeof Object   // "function" (ezek konstruktorok!)
		typeof object   // "undefined" !!!
		typeof null     // "object"
		typeof NaN      // "number"
		typeof Infinity // "number" (elemi típusok példányai!)

 
 + Saját szavaiddal fogalmazd meg, mit jelent a típúskényszerítés.
 
	Jó volt, amit leírtál. A lényeg, hogy ha két különböző típussal akarunk műveletet végezni, akkor az eltérő
	típusokat kényszerití az interpreter olyan köntösbe, amilyenben a mávelet elvégezhető. (ezért alakít át egy
	számot stringgé, hogy az összefűzés működhessen)
 
 + Saját szavaiddal fogalmazd meg, mit jelent a kacsa típusosság (duck typing).

	Mindig jusson eszedbe a következő kép:
	
	![Duck typing](http://mike-ward.net/cdn/images/blog/2014-12-05-friday-links-332/duck-typing.jpg)
	
	> Ha látok egy madarat, ami úgy megy, mint egy kacsa, úgy úszik, mint egy kacsa és úgy hápog, mint egy kacsa, akkor az a madár kacsa.[Wikipédia][wp-ducktyping]
	
	Eszerint egy adattípus **metódusai és változói határozzák meg annak viselkedését**, és nem az, hogy melyik alaposztályból származik, vagy milyen interfészt valósít meg.
	
	Példa erre:
	
		var Kutya = {
			ugat: function() {
				return "vau-vau";
			},
			megy: function() {
				return "négy lábon járok."
			}
		};
	
	    var Ember = {
			ugat: function() {
				return "csak a torkomat köszörültem...";
			},
			megy: function(){
				return "két lábra ágaskodva lépkedek.";
			}
		};
		
		// Ha látok egy objektumot, ami megy és ugat, akkor az az objektum egy kutyát jellemez.
		Kutya.ugat();
		
		// Az Ember objektum is megy és ugat, az ember tehát kutya?
		// JavaScript-ben technikailag igen, ezt jelenti a kacsí típusosság.
		Ember.ugat();
		

 + Írj egy függvényt, amely tetszőleges számú paramétert elfogad, és a tömb típusú paraméterek elemeinek a metszetét adja vissza.

    JavaScript-ben minden függvény rendelkezik egy `arguments` nevű adattaggal (mert itt a függvények első osztályú objektumok, azaz szintén rendelkeznek adattagokkal.)
	Ez egy **tömb-szerű** objektum, amely azokat a paramétereket tartalmazza, amikkel a függvényt meghívtuk.
	
	A feladat megoldásához a paraméterekről egyenként el kell dönteni, hogy tömb típusúak-e, és ha igen, össze kell őket fésülni.
	A tömb típus eldöntése nem egyértelmű:
		
		var myArray = [];
		var myObject = {};
		
		typeof myArray;  // "object"
		typeof myObject; // "object"
		
	Hiszen a tömb is objektum. Ehelyett azt kell vizsgálni, hogy az adott argumentum **példánya-e** az `Array` alaposztálynak. Itt jön képbe az `instanceof` operátor.
	
		function intersection(){
			var result = [];
			
			for(var i = 0; i < arguments.length; ++i){
				if(arguments[i] instanceof Array){
					for(var j = 0; j < arguments[i].length; ++j){
						if(result.indexOf(arguments[i][j]) < 0)
							result.push(arguments[i][j]);
					}
				}
			}
			
			return result;
		}
	
	Próba:
	
		intersection("pötty", [1,6], {}, null, [2,6,9,3,1,99,6], function(){}, [-1]);
		// [1, 6, 2, 9, 3, 99, -1]
    

[wp-ducktyping](http://en.wikipedia.org/wiki/Duck_typing)