// calculateArea.js - A function that calculates the area of a circle

function calculateArea(r) {
    var area;
    if (r <= 0) {
        return "Radius must be greater than zero";
    } else {
        area = Math.PI * r * r;
        return area;
    }
}

var radius = 5.2;

var theArea = calculateArea(radius);

console.log("The area of a circle with radius " + radius + " is " + theArea);