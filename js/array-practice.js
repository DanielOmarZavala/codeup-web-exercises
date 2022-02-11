"use strict";

var dogNames = ["Fideo", "Conchitas", "Fleeflee", "Strawberry"];

//push - Adds new LAST Element in Array
dogNames.push("Ralph");
console.log(dogNames);

//unshift - Adds new FIRST Element in Array
dogNames.unshift("Suzie");
console.log(dogNames);

//pop - Removes LAST Element in Array
let poppedName = dogNames.pop();
console.log("Removed " + dogNames);
console.log(dogNames);

//shift - Removes FIRST Element in Array
let shiftedName = dogNames.shift();
console.log("Removed " + shiftedName);
console.log(dogNames);

//indexOf
console.log(dogNames.indexOf("Conchitas", 0));

//lastIndexOf
console.log(dogNames.lastIndexOf("Fleeflee", 3))

//slice - Returns NEW Array, leaves Original Unmodified
console.log(dogNames.slice(1));

//reverse
console.log(dogNames.reverse());


