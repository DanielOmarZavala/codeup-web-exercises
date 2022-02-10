"use strict";

let numIn = 0;

while (numIn % 2 === 0) {
    numIn += parseInt(prompt("Please enter an odd number between '1' and '50.'"));
}

for (let i = 0; i <= 50; i++) {
    if (i === numIn) {
        console.log("Yikes! Skipping number: " + i);
    } else if (i % 2 !== 0) {
        console.log("Here is an odd number: " + i);
    }
}