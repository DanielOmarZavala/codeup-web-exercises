"use strict";

//While Loop Exercise
// let i = 0;
// let num = 1;
//
// while (i < 16) {
//     i++;
//     console.log(num += num);
// }

//Do While Loop Exercise
var allCones = Math.floor(Math.random() * 50) + 50;

do {
   let purchasedCones = Math.floor(Math.random() * 5) + 1;

    console.log(purchasedCones + " cones sold!");
   allCones -= purchasedCones;
    console.log(allCones + " cones left!"); //QUESTION TO ASK: When string added BEFORE allCones var, program breaks...why?

    //Could make this better...doesn't work very well.
    if (purchasedCones > allCones) {
        console.log("I cannot sell " + purchasedCones + " cones, I only have " + allCones);
    }
} while (allCones !== 0);
console.log("All cones have been sold!");