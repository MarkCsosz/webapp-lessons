window.onload = function() {
    var beka = new Beka("Szásó");
    var ML = new MitsubishiLancer("A70", 64000);
    var RF = new RenaultFluence(110000);
    var W3 = new Wartburg353(60000);
    var cars = [ML, RF, W3];
    //more cars and bikes and motos
    var c1 = new Car("Mercedes", "SL7345", 1200, 2011, true, 1999900, 4, "benzin", 4100, 6);
    var c2 = new Car("Suzuki", "CRSH18", 600, 2009, false, 1, 3.5, "fing", 2800, 5);
    var c3 = new Car("TESLA", "NYENYENYE", 1800, 2014, true, 1000000, 4, "áram", 3900, 8);
    var c4 = new Car("IFA", "Olyan teherszallito", 4180, 1980, false, 2442200, 6, "dízel", 9187, 6);

    var mb1 = new Motorcycle("Yamaha", 2, "benzin", 800, 270);
    var mb2 = new Motorcycle("HudobaMoci", 2, "midicloria", 150, 300000);
    var mb3 = new Motorcycle("Suzuki", 2, "fing", 1200, 300);

    var b1 = new Bike("mountenBike", 2, 26, 18);
    var b2 = new Bike("Csepelbrinyó", 2, 24, 1);
    var b3 = new Bike("Kempingbrinyó", 2, 20, 1);
    console.log(cars);
    // Create a constructor function.
    console.log("______________________");
    getPrototypeChain(c1);
    var vc = new VehicleContainer();
    vc.push(RF, c1, c2, c3, c4, mb1, mb2, mb3, b1, b2, b3);
    console.log("a saját tárolóm");
    console.log(vc);
    console.log("na olyan ojjektumot ad e?");
    vc.filterByType("Yamaha");
    var trabi = new Car("Trabant", "601", 600);
    console.log("______________________");
    console.log(Vehicle.count);




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

function Car(brand, model, performance) {
    this.brand = brand;
    this.model = model;
    this.production = 1900;
    this.isNew = false;
    this.price = 200;
    this.numberOfWheels = 4;
    this.engine = new Engine(this.brand, performance);
    this.toString = function() {
        return this.brand + " " + this.model; //part 5, nyincs beégetve
    };
    if (arguments[3] != undefined) {
        this.production = arguments[3];
    }
    if (arguments[4] != undefined) {
        this.isNew = arguments[4];
    }
    if (arguments[5] != undefined) {
        this.price = arguments[5];
    }
    if (arguments[6] != undefined) {
        this.numberOfWheels = arguments[6];
    }
    if (arguments[7] != undefined) {
        this.engine.fuelType = arguments[7];
    }
    if (arguments[8] != undefined) {
        this.engine.displacement = arguments[8];
    }
    if (arguments[9] != undefined) {
        this.engine.strokes = arguments[9];
    }

}
Car.prototype = new Vehicle;
Car.prototype.constructor = Car;
//beállítjuk a car prototípusát egy új vehicle-re

//és itt meg beállítjuk egy új carra a konstruktort

//engines for cars

function Engine(brand, performance) {
    this.brand = brand;
    this.performance = performance;
    this.fuelType = "petrol";
    this.strokes = 4;
    this.displacement = 900;
    this.horsePower = function() {
        return performance / 1000 * 0.75;
    }
    if (isFinite(performance) == false || performance < 1) {
        throw new performanceException(performance);

    }

}

function Motorcycle(brand) {
    this.brand = brand;
    this.numberOfWheels = 2;
    this.fuelType = "petrol";
    this.cm3 = 800;
    this.terminalVelocity = 90;
    if (arguments[1] != undefined) {
        this.numberOfWheels = arguments[1];
    }
    if (arguments[2] != undefined) {
        this.fuelType = arguments[2];
    }
    if (arguments[3] != undefined) {
        this.cm3 = arguments[3];
    }
    if (arguments[4] != undefined) {
        this.terminalVelocity = arguments[4];
    }

}

//other vehicle classes
Motorcycle.prototype = new Vehicle;


function Bike(brand) {
    this.brand = brand;
    this.numberOfWheels = 2;
    this.bSize = 16;
    this.speedCount = 1;
    if (arguments[1] != undefined) {
        this.numberOfWheels = arguments[1];
    }
    if (arguments[2] != undefined) {
        this.bSize = arguments[2];
    }
    if (arguments[3] != undefined) {
        this.speedCount = arguments[3];
    }

}
Bike.prototype = new Vehicle;


//specific cars
//mitsubishi

function MitsubishiLancer(model, performance) {
    this.model = model;
    this.brand = "Mitsubishi Lancer";
    this.production = 1973;
    this.isNew = false;
    this.price = 200;
    this.numberOfWheels = 4;
    this.engine = new Engine(this.brand, performance);
    this.engine.fuelType = "petrol";
    this.engine.displacement = 1.378;
    this.engine.strokes = 5;
    this.toString = function() {
        return this.brand + " " + this.model; //part 5, nyincs beégetve
    };
    if (arguments[2] != undefined) {
        this.production = arguments[2];
    }
    if (arguments[3] != undefined) {
        this.isNew = arguments[3];
    }
    if (arguments[4] != undefined) {
        this.price = arguments[4];
    }
    if (arguments[5] != undefined) {
        this.numberOfWheels = arguments[5];
    }
    if (arguments[6] != undefined) {
        this.engine.fuelType = arguments[6];
    }
    if (arguments[7] != undefined) {
        this.engine.displacement = arguments[7];
    }
    if (arguments[8] != undefined) {
        this.engine.strokes = arguments[8];
    }

}
MitsubishiLancer.prototype = new Car("", "", 100);

//Renault


function RenaultFluence(performance) {
    this.brand = "Renault";
    this.model = "Fluence";
    this.production = 2009;
    this.isNew = true;
    this.price = 17500;
    this.numberOfWheels = 4;
    this.engine = new Engine(this.brand, performance);
    this.engine.fuelType = "diesel";
    this.engine.displacement = 1.461;
    this.engine.strokes = 6;
    this.toString = function() {
        return this.brand + " " + this.model; //part 5, nyincs beégetve
    };
    if (arguments[1] != undefined) {
        this.production = arguments[1];
    }
    if (arguments[2] != undefined) {
        this.isNew = arguments[2];
    }
    if (arguments[3] != undefined) {
        this.price = arguments[3];
    }
    if (arguments[4] != undefined) {
        this.numberOfWheels = arguments[4];
    }
    if (arguments[5] != undefined) {
        this.engine.fuelType = arguments[5];
    }
    if (arguments[6] != undefined) {
        this.engine.displacement = arguments[6];
    }
    if (arguments[7] != undefined) {
        this.engine.strokes = arguments[7];
    }
}
RenaultFluence.prototype = new Car("", "", 100);


//wartburg

function Wartburg353(performance) {
    this.brand = "Wartburg";
    this.model = "353 ";
    this.production = 1966;
    this.isNew = false;
    this.price = 299;
    this.numberOfWheels = 4;
    this.engine = new Engine(this.brand, performance);
    this.engine.fuelType = "petrol";
    this.engine.displacement = 0.993;
    this.engine.strokes = 4;
    this.toString = function() {
        return this.brand + " " + this.model; //part 5, nyincs beégetve
    };
    if (arguments[1] != undefined) {
        this.production = arguments[1];
    }
    if (arguments[2] != undefined) {
        this.isNew = arguments[2];
    }
    if (arguments[3] != undefined) {
        this.price = arguments[3];
    }
    if (arguments[4] != undefined) {
        this.numberOfWheels = arguments[4];
    }
    if (arguments[5] != undefined) {
        this.engine.fuelType = arguments[5];
    }
    if (arguments[6] != undefined) {
        this.engine.displacement = arguments[6];
    }
    if (arguments[7] != undefined) {
        this.engine.strokes = arguments[7];
    }
}
Wartburg353.prototype = new Car("", "", 100);


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
        if (arguments[i] instanceof Vehicle) {
            this[this.length] = arguments[i];
            this.length++;
        }
        if (!(arguments[i] instanceof Vehicle)) {
            throw new notCarException(arguments[i]);
        }

    }

}


VehicleContainer.prototype.filterByType = function(getType) {
    var match = new VehicleContainer();
    for (var i = 0; i < this.length; i++) {

        (getType == this[i].brand && match.push(this[i]));
    }
    console.log(match);
}

function Beka(nev) {
    this.nev = nev;

}



//part 2
//functions

function getPrototypeChain(obj) {
    var objTemp = [];
    var temp = "";
    do {

        obj = Object.getPrototypeOf(obj);
        //  console.log(obj);
        if (obj != null) {
            temp = obj;
            objTemp.push(temp);
        } else {
            objTemp.push("null");
        }



    }
    while (obj != null);
    console.log(objTemp);

}


//sorting by the power of engine

function sortingByWatt(carA, carB) {
    if (carA.engine.performance > carB.engine.performance)
        return -1;
    if (carA.engine.performance < carB.engine.performance)
        return 1;
    return 0;

}

//exceptions

function performanceException(perf) {
    this.perf = perf;
    this.message = " :ez nem felel meg a nem szám és nem negatív szabálynak";
    this.toString = function() {
        return this.perf + this.message;
    };
}

function notCarException(obj) {
    this.obj = obj;
    this.message = " :ez nem Vehicle típusú ojjektum";
    this.toString = function() {
        return this.obj.constructor.name + this.message;
    };
}