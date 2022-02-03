"use strict";

// console.log("Hello from external javascript");
//
// let userColorIn = prompt("What is your favorite color?");
//
// alert("Great! My favorite color is " + userColorIn + " too!");

let costPerDay = prompt("Please enter per day rental cost.");
let numOfMoviesRented = prompt("Please enter the amount of rentals");

var totalCharge = 0;

//let totalCharge = numOfMoviesRented * costPerDay *

for (let i = numOfMoviesRented; i >= 1; i--) {

    if (i < numOfMoviesRented) {
        var rentDur = prompt("Please enter the next rental duration.");
    }else{
        var rentDur = prompt("Please enter a rental duration.");
    }
    var indMovieCharge = costPerDay * rentDur;
    totalCharge = totalCharge + indMovieCharge;
 }

alert("Your total today is " + totalCharge);