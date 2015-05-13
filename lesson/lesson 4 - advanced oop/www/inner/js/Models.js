//vehicles
//Model start

var Models = {
    Vehicle: function(numberOfWheels, fuelType) {
        Models.Vehicle.count = ++Models.Vehicle.count || 1;
        this.numberOfWheels = numberOfWheels;
        this.fuelType = fuelType;
    },
    //cars

    Car: function(brand, model, performance) {
        this.brand = brand;
        this.model = model;
        this.production = 1900;
        this.isNew = false;
        this.price = 200;
        this.numberOfWheels = 4;
        this.engine = new Models.Engine(this.brand, performance);
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

    },
    //Car.prototype = new Vehicle;

    //engines for cars

    Engine: function(brand, performance) {
        this.brand = brand;
        this.performance = performance;
        this.fuelType = "petrol";
        this.strokes = 4;
        this.displacement = 900;
        this.horsePower = function() {
            return performance / 1000 * 0.75;
        }
        if (isFinite(performance) == false || performance < 1) {
            throw new Models.performanceException(performance);

        }

    },

    Motorcycle: function(brand) {
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
    },

    //other vehicle classes



    Bike: function(brand) {
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

    },



    //specific cars
    //mitsubishi

    MitsubishiLancer: function(model, performance) {
        this.model = model;
        this.brand = "Mitsubishi Lancer";
        this.production = 1973;
        this.isNew = false;
        this.price = 200;
        this.numberOfWheels = 4;
        this.engine = new Models.Engine(this.brand, performance);
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

    },
    //MitsubishiLancer.prototype = new Car("", "", 100);

    //Renault


    RenaultFluence: function(performance) {

        this.brand = "Renault";
        this.model = "Fluence";
        this.production = 2009;
        this.isNew = true;
        this.price = 17500;
        this.numberOfWheels = 4;
        this.engine = new Models.Engine(this.brand, performance);
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
    },
    //RenaultFluence.prototype = new Car("", "", 100);


    //wartburg

    Wartburg353: function(performance) {

        this.brand = "Wartburg";
        this.model = "353 ";
        this.production = 1966;
        this.isNew = false;
        this.price = 299;
        this.numberOfWheels = 4;
        this.engine = new Models.Engine(this.brand, performance);
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
    },

    //other objects
    //part 5
    //part 6, eccerűen megoldom, nem baszom bele a tömbbe, ignorálom. Ja meg kiírom, h aki bevitte az fasz
    //part 7 na ezt bogozd ki
    //part 8

    VehicleContainer: function() {


    },


    //exceptions
    performanceException: function(perf) {
        this.perf = perf;
        this.message = " :ez nem felel meg a nem szám és nem negatív szabálynak";
        this.toString = function() {
            return this.perf + this.message;
        };
    },

    notCarException: function(obj) {
        this.obj = obj;
        this.message = " :ez nem Vehicle típusú ojjektum";
        this.toString = function() {
            return this.obj.constructor.name + this.message;
        };
    }


} //Model end


Models.Car.prototype = new Models.Vehicle();
Models.Car.prototype.constructor = Models.Car;

Models.Wartburg353.prototype = new Models.Car("Wartburg", "353", 100);
Models.Wartburg353.prototype.constructor = Models.Wartburg353;

Models.RenaultFluence.prototype = new Models.Car("Renault", "Fluence", 110000);
Models.RenaultFluence.prototype.constructor = Models.RenaultFluence;

Models.MitsubishiLancer.prototype = new Models.Car("Mitsubishi", "Lancer", 64000);
Models.MitsubishiLancer.prototype.constructor = Models.MitsubishiLancer;

Models.Motorcycle.prototype = new Models.Vehicle();
Models.Motorcycle.prototype.constructor = Models.Motorcycle;

Models.Bike.prototype = new Models.Vehicle();
Models.Bike.prototype.constructor = Models.Bike;

Models.VehicleContainer.prototype = new Array;
Models.VehicleContainer.prototype.push = function() {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Models.Vehicle) {
            this[this.length] = arguments[i];
            this.length++;
        }
        if (!(arguments[i] instanceof Models.Vehicle)) {
            throw new Models.notCarException(arguments[i]);
        }

    }

}
Models.VehicleContainer.prototype.filterByType = function(getType) {
    var match = new Models.VehicleContainer();
    for (var i = 0; i < this.length; i++) {

        (getType == this[i].brand && match.push(this[i]));
    }
    console.log(match);
}