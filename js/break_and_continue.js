"use strict";

//My Version
let numIn = 0;

while (numIn % 2 === 0 || numIn > 50 || numIn < 0) {
    numIn = parseInt(prompt("Please enter an odd number between '1' and '50.'"));
}

for (let i = 0; i <= 50; i++) {
    if (i === numIn) {
        console.log("Yikes! Skipping number: " + i);
    } else if (i % 2 !== 0) {
        console.log("Here is an odd number: " + i);
    }
}

//DocRob Example
// var oddNumber = promptForOddNumberInRange(1, 50);
// oddNumber = parseInt(oddNumber);
//
// printOddNumbersInRangeWithSkip(1, 50, oddNumber);
//
// function printOddNumbersInRangeWithSkip(low, high, skipNumber) {
//     for (let i = low; i <= high; i++) {
//         if(i === skipNumber || i % 2 === 0) {
//             if(i=== skipNumber) {
//                 console.log("Yikes! Skipping number: " + i);
//             }
//             continue;
//         }
//         console.log("Here is an odd number: " + i);
//     }
// }
//
// function promptForOddNumberInRange(low, high) {
//     //loop until user gives an odd number in the range INCLUSIVE
//     var result;
//     while(true) {
//         result = prompt("Enter an odd number from " + low " to " + high);
//
//         if(result % 2 === 1 && result >= low && result <= high) {
//             break;
//         }
//     }
//     return result;
// }