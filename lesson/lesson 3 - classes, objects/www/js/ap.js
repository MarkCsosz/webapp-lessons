// 1, literal format
window.onload = function() {
    var carsArray = [];
    var car0 = {
        brand: "mercedes",
        model: "600SEL",
        production: 1999,
        isNew: false,
        price: 1999,
        toString: function() {
            var codeName = "mercedes" + " " + "600SEL";
        }

    };

    var car1 = {
        brand: "Suzuki",
        model: "vitara",
        production: 2013,
        isNew: true,
        price: 19000,
        toString: function() {
            var codeName = "Suzuki" + " " + "Vitara";
        }

    };
    var car2 = {
        brand: "Audi",
        model: "A6 C6",
        production: 2010,
        isNew: false,
        price: 35000,
        toString: function() {
            var codeName = "audi" + " " + "A6 C6";
        }

    };
    var car3 = {
        brand: "IFA",
        model: "F9",
        production: 1951,
        isNew: false,
        price: 981,
        toString: function() {
            var codeName = "IFA" + " " + "F9";
        }


    };
    //part 2, all object in array and shorting and part 11 and part 12
    carsArray = [car0, car1, car2, car3];
    console.log(carsArray);
    sortCars(carsArray);
    var k1 = new Car("Mercedes", "XSL600", 2001, false, 19999, 4, "diesel", 4000, 6, 1000);
    var k2 = new Car("Suzuki", "Swift", 2009, true, 35999, 4, "benzin", 996, 4, 600);
    var k3 = new Car("AUDI", "A6 valami", 1989, false, 1000, 4, "fing", 4163, 8, 1200);
    var k4 = new Car("BMW", "TSGDG77", 2011, true, 24422, 4, "gáz", 3600, 5, 900);
    var carsky = [k1, k2, k3, k4];
    console.log(carsky);
    //part 7 + exceptiooons and part 11 & 12
    beCar();
    vehicles();
}

//2 part sorting function

function sortCars(carsArray) {
    carsArray.sort(sortingByDate);
    console.log(carsArray);
}

function sortingByDate(carA, carB) {
    if (carA.production < carB.production)
        return -1;
    if (carA.production > carB.production)
        return 1;
    return 0;

}
//part 6 Veichle

function Vehicle(numberOfWheels, fuelType) {
    this.numberOfWheels = numberOfWheels;
    this.fuelType = fuelType;
}
//3 part literális forma előnyei, nem kell az ojjektum "konstruktorával" szöszmötölni, elég ha létrehozzuk az objektumot. Hátrány, ami szerintem nagy, ezek itt nálam mind mind külön-külön objektumok, nincs közös nevezőjük, vagyis hiába hasonló a felépítésük, a car0 nem car típusú objektum, ahogy a többi car0-1-3 is magukban a nevük ojjektumok, így pl ha lenne másfajta ojjektumom, pl kutya, akkor nem tudnám a kocsikat és ezeket megszűrni. Vagyis az osztályozás mint olyan itt nem úgy létezik.

//part 4, ojjects with constructors
//Készíts konstruktort, ami Car típusú objektumokat hoz létre! Adattagjai legyenek ugyanazok, mint az első feladatban megadott literálnak. A konstruktorban csak az autó márkájának és modelljének megadása legyen kötelező.
// fuck, dude? hogy a kukiba? mármint hogy lehet mezőt kötelezővé és nem kötelezővé tenni? fingomsenincsen. Meg most bekérje, vagy ne? vagy én hozzam létre? nem tiszta, amúgy se interfacek se semmi olyasmit nem találtam me nincs is ehhe (JShe)
//8 öö talán ez az, me Ősojjektum
Car.prototype = new Vehicle;
Car.prototype.constructor = Car;

function Car(brand, model, production, isNew, price, numberOfWheels, fuelType, displacement, strokes, performance) {
    this.brand = brand;
    this.model = model;
    this.production = production || "nincs adat";
    this.isNew = isNew || "nincs adat";
    this.price = price || "nincs adat";
    this.numberOfWheels = numberOfWheels || "nincs adat";
    this.fuelType = fuelType;
    this.engine = new Engine(this.brand, this.fuelType, displacement, strokes, performance);
    this.toString = function() {
        return this.brand + " " + this.model; //part 5, nyincs beégetve
    };
}
//part 9 moto and bike objects
Motorcycle.prototype = new Vehicle;
Motorcycle.prototype.constructor = Motorcycle;

function Motorcycle(numberOfWheels, brand, fuelType, cm3, terminalVelocity) {
    this.numberOfWheels = numberOfWheels;
    this.brand = brand;
    this.fuelType = fuelType;
    this.cm3 = cm3;
    this.terminalVelocity = terminalVelocity;
}

Bike.prototype = new Vehicle;
Bike.prototype.constructor = Bike;

function Bike(numberOfWheels, brand, size, speedCount) {
    this.numberOfWheels = numberOfWheels;
    this.brand = brand;
    this.fuelType = "nincs";
    this.size = size;
    this.speedCount = speedCount;
}

//part 7 + exceptiooons and part 11 & 12

function beCar() {
    var brand, model, production, isNew, price, numberOfWheels, fuelType, displacement, strokes, performance;
    var fuelTypes = ["dízel", "benzin", "gáz", "áram", "fing"];
    do {
        brand = prompt("adja meg a járgány gyártóját!");
    }
    while (brand == "");
    do {
        model = prompt("adja meg a ynágráj modelljét!");
    }
    while (model == "");
    do {
        production = prompt("adja meg a járgány gyártási idejét!", 1900);
    }
    while (isFinite(production) == false);

    var temp = prompt("új e a kocsié?! (igen és nem)");
    if (temp == "igen") {
        isNew = true;
    } else {
        isNew = false;
    }
    price = prompt("ADJA MEG A KOCSI ÁRÁT:", 0);
    do {
        numberOfWheels = prompt("aggyad meg a kerekek számát!")
        if (isFinite(numberOfWheels) == false || numberOfWheels < 1) {
            alert("mi a fasz van bazdmeg, antigravitál? Esetleg nem tudod az arab számokat???");
            //code
        }
    }

    while (isFinite(numberOfWheels) == false || numberOfWheels < 1);
    do {
        var find = false;
        fuelType = prompt("adja meg az üzemanyag típusát! (dízel, benzin, gáz, áram, fing)");
        for (var i = 0; i < fuelTypes.length; i++) {
            if (fuelType == fuelTypes[i]) {
                find = true;
            }
        }
    }
    while (find == false);
    displacement = prompt("adja meg a kocsi lökettérfogatát!", 600);
    strokes = prompt("adja meg a kocsi ütemszámát!", 2);
    do {
        performance = prompt("aggya meg a teljesítményét! asszem ez kilowatt vagy watt mittom");
        if (isFinite(performance) == false || performance < 1) {
            alert("eszed legyen bazdmeg ne étvágyad!");
        }
    }
    while (isFinite(performance) == false || performance < 1)
    var bekocsi = new Car(brand, model, production, isNew, price, numberOfWheels, fuelType, displacement, strokes, performance);
    document.getElementById("brand").innerHTML = "<h1>" + bekocsi.brand + " gyártó <h1>";
    document.getElementById("model").innerHTML = "<h2>" + bekocsi.model + " model <h2>";
    document.getElementById("product").innerHTML = "<h3>" + bekocsi.production + " évszám<h3>";
    if (bekocsi.isNew == true) {
        document.getElementById("isnew").innerHTML = "<h3>új állapot<h3>";
    } else {
        document.getElementById("isnew").innerHTML = "<h3>NEM új állapot<h3>";
    }
    document.getElementById("price").innerHTML = "<h3>" + bekocsi.price + " ft ár<h3>";
    document.getElementById("wheels").innerHTML = "<h3>" + bekocsi.numberOfWheels + " db kerék<h3>";
    document.getElementById("fuel").innerHTML = "<h3>" + bekocsi.fuelType + " típusú üzemanyag<h3>";
    document.getElementById("disp").innerHTML = "<h3>" + bekocsi.engine.displacement + " lökettérfogat<h3>";
    document.getElementById("strokes").innerHTML = "<h3>" + bekocsi.engine.strokes + " ütemű<h3>";
    document.getElementById("perf").innerHTML = "<h3>" + bekocsi.engine.performance + " teljesítmény mittom watt kilowatt fasztudja<h3>";

}
//part 11 engine objects

function Engine(brand, fuelType, displacement, strokes, performance) {
    this.brand = brand;
    this.fuelType = fuelType;
    this.displacement = displacement;
    this.strokes = strokes;
    this.performance = performance;

    this.horseFuck=function() {
        return performance * 0.75;
    }

}


//part 10 the array of bikes motors and cars and part 13

function vehicles() {
    var c1 = new Car("Mercedes", "SL7345", 2011, true, 1999900, 4, "benzin", 4100, 6, 1200);
    var c2 = new Car("Suzuki", "CRSH18", 2009, false, 1, 3.5, "fing", 2800, 5, 600);
    var c3 = new Car("TESLA", "NYENYENYE", 2014, true, 1000000, 4, "áram", 3900, 8, 1800);
    var c4 = new Car("IFA", "Olyan teherszallito", 1980, false, 2442200, 6, "dízel", 9187, 6, 4180);

    var mb1 = new Motorcycle(2, "Yamaha", "benzin", 800, 270);
    var mb2 = new Motorcycle(2, "HudobaMoci", "midicloriab", 150, 300000);
    var mb3 = new Motorcycle(2, "Suzuki", "fing", 1200, 300);

    var b1 = new Bike(2, "mountenBike", 26, 18);
    var b2 = new Bike(2, "Csepelbrinyó", 24, 1);
    var b3 = new Bike(2, "Kempingbrinyó", 20, 1);

    var vehicles = [c1, c2, c3, b3, c4, b2, mb1, mb2, mb3, b1];
    var bikes = [];
    var carskys =[]; //oroszosan :D
    for (var i = 0; i < vehicles.length; i++) {
        if (vehicles[i] instanceof Bike) {
            bikes.push(vehicles[i]);
        }
    }
    console.log(bikes);

    for (var i = 0; i < vehicles.length; i++) {
        if (vehicles[i] instanceof Car) {
            carskys.push(vehicles[i]);
        }
    }
    carskys.sort(sortingByWatt);
    console.log(carskys);
    //15 háhh működik faszom! pedig azt hittem nem fog mivel nem hittem, h olyan okos, h megjegyzi h ezek kocsi ojjektumok de mégiiiis, gondolom az értelmező megleste h mi az ojjektum típus és onnantól minden ment mint az ágybavizelés
    for(var i=0; i<carskys.length; i++){
        console.log(carskys[i].engine.horseFuck());    
    }

}
//part 13 sorting by watt

function sortingByWatt(carA, carB) {
    if (carA.engine.performance > carB.engine.performance)
        return -1;
    if (carA.engine.performance < carB.engine.performance)
        return 1;
    return 0;

}