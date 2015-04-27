// Lesson 3

// 1. - Object literals
var daddysCar = {
	brand: 'Renault',
	model: 'Espace',
	production: 2008,
	isNew: false,
	price: 800000,
	toString: function() {
		return "My daddy's car is a Renault Espace.";
	}
};

var myCar = {
	brand: 'Mitsubishi',
	model: 'Lancer',
	production: 2015,
	isNew: true,
	price: 4000000,
	toString: function() {
		return "I want to own a Mitsubishi Lancer.";
	}
};

var myNeighboursCar = {
	brand: 'Lada',
	model: 'Niva',
	production: 1990,
	isNew: false,
	price: 100000,
	toString: function() {
		return "My neighbour is a forester - a Lada Niva owner.";
	}
};


// 2. - Put object literals in an array and sort it.
var objectLiteralCars = [daddysCar, myCar, myNeighboursCar];

objectLiteralCars.sort(function(a,b){
	if(a.production >= b.production) return 1;
	if(a.production <= b.production) return -1;
	return 0;
});

console.log("Object literals sorted", objectLiteralCars);


// 3. - Advantages/disadvantages of object literals.


// 4. - Car constructor
function Car(brand, model){
	this.brand = brand;
	this.model = model;
	this.production = null;
	this.isNew = true;
	this.price = -1;
	
	// 5. - toString corrected to use instance data
	this.toString = function() {
		return this.brand + " " + this.model;
	};
}


// 6. - Vehicle abstraction
function Vehicle(numberOfWheels, fuelType) {
	this.numberOfWheels = numberOfWheels;
	this.fuelType = fuelType;
}

// 7. - Error handling in Vehicle constructor
function Vehicle(numberOfWheels, fuelType) {
	
	if(typeof numberOfWheels !== "number" || numberOfWheels <= 0) {
		throw new Error("Vehicle must have at least one wheel.");
	}
	if(typeof fuelType !== "string" || !fuelType) {
		throw new Error("Fuel type must be specified.");
	}
	
	this.numberOfWheels = numberOfWheels;
	this.fuelType = fuelType;
}


// 8. - Set Car prototype to an instance of Vehicle class
// Method A - Prototype
Car.prototype = new Vehicle(4, "gasoline");

// Method B - Merge fields of the two classes.


// 9. - Motorcyclec and bikes
function Motorcycle(brand, model) {
	this.brand = brand;
	this.model = model;
}

function Bike(brand, model, bikeType) {
	this.brand = brand;
	this.model = model;
	this.bikeType = null;
}

Motorcycle.prototype = new Vehicle(2, "gasoline");
Bike.prototype = new Vehicle(2, "foot power");


// 10. - Working with object instances.
// 10.1. - Create object instances in a common array.
var vehicles = [
	new Car("Toyota", "Corolla"),
	new Motorcycle("Aprilia", "Ax8"),
	new Car("Chevrolet", "Impala"),
	new Car("Wartburg", "353"),
	new Bike("Csepel", "Roadrunner"),
	new Car("Ford", "Fusion"),
	new Bike("BMX", "Zero"),
	new Motorcycle("Kawasaki", "Ninja")
];

// 10.2. - Filter bikes into a separate array.
var bikes = vehicles.filter(function(vehicle){
	if(vehicle instanceof Bike){
		return vehicle;
	}
});

console.log("Bikes only", bikes);


// 11. - Engine
function Engine(perf){
	
	if(typeof perf !== "number" || perf <= 0) {
		throw new Error("Invalid performance supplied.");
	}
		
	this.brand = '';
	this.fuelType = '';
	this.displacement = '';
	this.strokes = 4;
	this.performance = perf;
}


// 12. - Add engines to the cars
vehicles.forEach(function(vehicle){
	if(vehicle instanceof Car) {
		var engine = new Engine(Math.floor( Math.random() * 1000 ));
		engine.brand = vehicle.brand;
		engine.fuelType = vehicle.fuelType;
		engine.displacement = Math.random() * 10000;
		engine.strokes = 4;
		
		vehicle.engine = engine;
	}
});


// 13. - Filter cars ans sort them by engine performance
// 13.1. - Filter
var cars = vehicles.filter(function(vehicle){
	if(vehicle instanceof Car) {
		return vehicle;
	}
});

// 13.2. - Sort
cars.sort(function(a,b){
	if(a.engine.performance >= b.engine.performance) return -1;
	if(a.engine.performance <= b.engine.performance) return 1;
	return 0;
});

// 13.3. - Display
console.log("Cars sorted by performance", cars);


// 14. - Property augmentation
Engine.prototype.performanceInHp = function() {
	return this.performance * 1.34102209;
};

// 15. - Test augmented property
cars.forEach(function(car){
	console.log(car + " (Performance: " + car.engine.performance + " KW, " + car.engine.performanceInHp() + " HP.)");
});