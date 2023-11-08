function setMode(mode) {
    // Your implementation for setMode goes here
    console.log("Setting mode to: ", mode);
}

function setTemp(degrees) {
    // Your implementation for setTemp goes here
    console.log("Setting temperature to: ", degrees);
}

function bake(degrees) {
    var message;

    if (degrees > 500) {
        message = "I'm not a nuclear reactor!";
    } else if (degrees < 100) {
        message = "I'm not a refrigerator!";
    } else {
        message = "That's a very comfortable temperature for me...";
        setMode("Bake");
        setTemp(degrees);
    }
    return message;
}

var status = bake(350);
