window.onload = function() {
    var beka = new Beka("Szásó");
    var ML = new MitsubishiLancer();
    var RF = new RenaultFluence();
    var W3 = new Wartburg353();
    var cars = [ML, RF, W3];
    //more cars and bikes and motos
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
    console.log(cars);
    // Create a constructor function.
    console.log("______________________");
    getPrototypeChain(mb1);
    var vc = new VehicleContainer();
    vc.push(RF, c1, c2, c3, c4, mb1, beka, mb2, mb3, b1, b2, b3, cars);
    console.log("a saját tárolóm");
    // vc.write();
    console.log(vc);
    console.log("na olyan ojjektumot ad e?");
    vc.filterByType("Yamaha");


    //console.log(Vehicle.count);
}

//object templates
//vehicles

function Vehicle(numberOfWheels, fuelType) {
    Vehicle.count = ++Vehicle.count || 1;
    this.numberOfWheels = numberOfWheels;
    this.fuelType = fuelType;
}
//cars

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
Car.prototype = new Vehicle;
//beállítjuk a car prototípusát egy új vehicle-re
Car.prototype.constructor = Car;
//és itt meg beállítjuk egy új carra a konstruktort

//engines for cars

function Engine(brand, fuelType, displacement, strokes, performance) {
    this.brand = brand;
    this.fuelType = fuelType;
    this.displacement = displacement;
    this.strokes = strokes;
    this.performance = performance;

    this.horsePower = function() {
        return performance / 1000 * 0.75;
    }

}

function Motorcycle(numberOfWheels, brand, fuelType, cm3, terminalVelocity) {
    this.numberOfWheels = numberOfWheels;
    this.brand = brand;
    this.fuelType = fuelType;
    this.cm3 = cm3;
    this.terminalVelocity = terminalVelocity;
}

//other vehicle classes
Motorcycle.prototype = new Vehicle;
Motorcycle.prototype.constructor = Motorcycle;

function Bike(numberOfWheels, brand, size, speedCount) {
    this.numberOfWheels = numberOfWheels;
    this.brand = brand;
    this.fuelType = "nincs";
    this.size = size;
    this.speedCount = speedCount;
}
Bike.prototype = new Vehicle;
Bike.prototype.constructor = Bike;

//specific cars
//mitsubishi

function MitsubishiLancer() {
    this.engine = new Engine(this.brand, this.fuelType, this.displacement, this.strokes, this.performance);
    this.toString = function() {
        return this.brand + " " + this.model; //part 5, nyincs beégetve
    };

}
MitsubishiLancer.prototype = new Car;
MitsubishiLancer.prototype.constructor = MitsubishiLancer;
//Renault


function RenaultFluence() {

    this.engine = new Engine(this.brand, this.fuelType, this.displacement, this.strokes, this.performance);
    this.toString = function() {
        return this.brand + " " + this.model; //part 5, nyincs beégetve
    };
}
RenaultFluence.prototype = new Car;
RenaultFluence.prototype.constructor = RenaultFluence;

//wartburg

function Wartburg353() {

    this.engine = new Engine(this.brand, this.fuelType, this.displacement, this.strokes, this.performance);
    this.toString = function() {
        return this.brand + " " + this.model; //part 5, nyincs beégetve
    };
}
Wartburg353.prototype = new Car;
Wartburg353.prototype.constructor = Wartburg353;
//other objects
//part 5
//part 6, eccerűen megoldom, nem baszom bele a tömbbe, ignorálom. Ja meg kiírom, h aki bevitte az fasz
//part 7 na ezt bogozd ki
//part 8

function VehicleContainer() {


}
VehicleContainer.prototype = new Array;
VehicleContainer.prototype.push = function() {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Array) {
            for (var j = 0; j < arguments[i].length; j++) {
                if (arguments[i][j] instanceof Vehicle) {
                    this[this.length] = arguments[i][j];
                    this.length++;
                }
            }
        }
        if (arguments[i] instanceof Vehicle) {
            this[this.length] = arguments[i];
            this.length++;
        }
        if (!(arguments[i] instanceof Vehicle) && !(arguments[i] instanceof Array)) {
            console.log("fuckoff");
            alert(" van benne bazdmeg egy " + arguments[i].constructor.name + " te fasz");
        }

    }

}


VehicleContainer.prototype.filterByType = function(getType) {
    var match = new VehicleContainer();
    //var match=[];
    for (var i = 0; i < this.length; i++) {

        (getType == this[i].brand && match.push(this[i]));
    }
    console.log(match);
}

function Beka(nev) {
    this.nev = nev;

}

//prototypes

MitsubishiLancer.prototype.brand = "Mitsubishi Lancer";
MitsubishiLancer.prototype.model = "A70";
MitsubishiLancer.prototype.production = 1973;
MitsubishiLancer.prototype.isNew = false;
MitsubishiLancer.prototype.price = 200;
MitsubishiLancer.prototype.numberOfWheels = 4;
MitsubishiLancer.prototype.fuelType = "petrol";
MitsubishiLancer.prototype.displacement = 1.378;
MitsubishiLancer.prototype.strokes = 5;
MitsubishiLancer.prototype.performance = 64000;

RenaultFluence.prototype.brand = "Renault";
RenaultFluence.prototype.model = "Fluence";
RenaultFluence.prototype.production = 2009;
RenaultFluence.prototype.isNew = true;
RenaultFluence.prototype.price = 17500;
RenaultFluence.prototype.numberOfWheels = 4;
RenaultFluence.prototype.fuelType = "diesel";
RenaultFluence.prototype.displacement = 1.461;
RenaultFluence.prototype.strokes = 6;
RenaultFluence.prototype.performance = 110000;

Wartburg353.prototype.brand = "Wartburg";
Wartburg353.prototype.model = "353 ";
Wartburg353.prototype.production = 1966;
Wartburg353.prototype.isNew = false;
Wartburg353.prototype.price = 299;
Wartburg353.prototype.numberOfWheels = 4;
Wartburg353.prototype.fuelType = "petrol";
Wartburg353.prototype.displacement = 0.993;
Wartburg353.prototype.strokes = 4;
Wartburg353.prototype.performance = 60000;

//part 2
//functions

function getPrototypeChain(obj) {
    var objTemp = [];
    var temp = "";
    do {

        obj = Object.getPrototypeOf(obj);
        if (obj != null) {
            temp = obj.constructor.name;
            objTemp.push(temp);
        } else {
            objTemp.push("null");
        }



    }
    while (obj != null);
    console.log(objTemp);

}

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
//sorting by the power of engine

function sortingByWatt(carA, carB) {
    if (carA.engine.performance > carB.engine.performance)
        return -1;
    if (carA.engine.performance < carB.engine.performance)
        return 1;
    return 0;

}