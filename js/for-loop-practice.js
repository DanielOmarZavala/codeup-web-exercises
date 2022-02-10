"use strict";

//Casey .length example - For Loop
// let letters = "";
//
// for (let i = 0; i<= 36; i++){
//     letters += "z";
//     i = letters.length;
//     console.log(letters);
// }
//
// console.log(letters.length);

// TODO: Use a for loop to print the even numbers between 0 and 30, inclusive.
//  HINT: remember the remainder operator (modulo)

// for (let i = 0; i <= 30; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
//  -> If it's neither print "I'm not playing"
//  -> Print "marco polo" if it's divisible by 3 and 5.

for (let i = 1; i <= 40; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " is divisible by 3 and 5! 'marco polo'");
    }else if (i % 3 === 0) {
        console.log(i + " is divisible by 3! 'polo'");
    }else if (i % 5 === 0) {
        console.log(i + " is divisible by 5! 'marco'");
    }else {
        console.log("I'm not playing");
    }
}