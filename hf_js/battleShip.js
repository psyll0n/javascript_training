// DECLARE three variables to hold the location of each cell of the ship. Let’s call them
var location1 = 3;
var location2 = 4;
var location3 = 5;

// DECLARE a variable to hold the user’s current guess.
var guess;

// DECLARE a variable to hold the number of hits. 
var hits = 0;

// DECLARE a variable to hold the number of guesses.
var guesses = 0;

// DECLARE a variable to keep track of whether the ship is sunk or not.
var isSunk = false;


// TODO: Create a loop and get the user to guess the location of the ship.
while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;

        // TODO: Check users' guess against the location of the ship.
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Hit!");
            hits = hits + 1;
            // TODO: Check if the ship is sunk.
            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert("Miss!");
        }
    }
}

// TODO: Display the number of hits and guesses to the user.
var stats = "You took " + guesses + " guesses to sink the battleship, " + hits + " which means your accuracy was " + (3 / guesses);
alert(stats);