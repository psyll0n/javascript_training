// Compoubd conditional statements in JS.

// Conditional evaluation using OR operator.
if (true || false) {
    console.log("Only one value needs to be true in an OR statement for the whole evaluation to be true ");
}

// Conditional evaluation using AND operator.
if (true && false) {
    //
} else {
    console.log("Both values need to be true in an AND statement for the whole evaluation to be true ");
}


var myMaxLimit = 20;
var myMinLimit = 5;

var myValue = 10;

if (myValue < myMaxLimit && myValue > myMinLimit) {
    console.log("The value " + myValue + " is between " + myMinLimit + " and " + myMaxLimit);
} else {
    console.log("The value " + myValue + " is not between " + myMinLimit + " and " + myMaxLimit);
}


