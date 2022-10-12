function makeCar() {

    /* We have several makes, models, years and colors to 
    choose from in these four arrays... */
    var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    var years = [1955, 1957, 1948, 1954, 1961];
    var colors = ["red", "blue", "tan", "yellow", "white"];
    /* ... and we’ll use this array to choose a convertible
    property value, either true or false. */
    var convertible = [true, false];

    /* We’re going to combine values from the arrays randomly using these
    four random numbers. */
    var rand1 = Math.floor(Math.random() * makes.length);
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * years.length);
    var rand4 = Math.floor(Math.random() * colors.length);
    var rand5 = Math.floor(Math.random() * 5) + 1;
    var rand6 = Math.floor(Math.random() * 2);

    var car = {
        // values made from the values in the arrays.
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        convertible: convertible[rand6],
        mileage: 0
    };
    return car;
}

function displayCar(car) {
    console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
    }
    var carToSell = makeCar();
    displayCar(carToSell);

    var fiat = {
        make: "Fiat",
        model: "500",
        year: 1957,
        color: "Medium Blue",
        passengers: 2,
        convertible: false,
        mileage: 88000,
        /* Here's the property to hold the current state of the
        engine (true if it is started and false if it is off). */
        started: false,
        // And here's a two methods to start and stop the car.
        start: function() {
            this.started = true;
        },
        stop: function() {
            this.started = false;
        },

        // A function can be added directly to an object like this.
        drive: function() {
            if (this.started) {
            alert("Zoom zoom!");
            } else {
            alert("You need to start the engine first.");
        }
    }
}