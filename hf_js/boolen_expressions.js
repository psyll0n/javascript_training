// Boolean Expressions #1
var temp = 81;
var willRain = true;
var humid = (temp > 80 && willRain == true);

console.log(humid);

// Boolean Expressions #2
var guess = 6;
var isValid = (guess >= 0 && guess <= 6);

console.log(isValid);

// Boolean Expressions #3
var kB = 1287;
var tooBig = (kB > 1000);
var urgent = true;
var sendFile = (urgent == true || tooBig == false);

console.log(sendFile);

// Boolean Expressions #4
var keyPressed = "N";
var points = 142;
var level;
if (keyPressed == "Y" ||
    (points > 100 && points < 200)) {
    level = 2;
} else {
    level = 1;
}

console.log(level);