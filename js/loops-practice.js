"use strict";

// let i = 8
//
// //Iterates from 8 - 50
// while (i <= 50) {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
//     i++
// }

// let fullNameEntered = false;
// let names = "";
// WE DON'T KNOW HOW MANY NAMES THEY HAVE!
// while (!fullNameEntered){
//
//     fullNameEntered = confirm("Is this your full name: " + names);
//     names += " "
//     names += prompt("Please enter or add to your name");
//
//    // fullNameEntered = confirm("Is this your full name?");
//
// }
// alert("This is your name: " + names);



//let fullNameEntered = false;
// let names = "";

// do {
//     names += prompt("Please enter or add to your name");
//
//     fullNameEntered = confirm("Is this your full name: " + names);
//
//     if (!fullNameEntered){
//         names += " ";
//     }
// } while (!fullNameEntered)
// alert("This is your name: " + names);


//do while loop
// TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
//

//"another way" let i = 32;
// let i = 30;
//
// do {
//     console.log("There are " + i + " remaining!");
//     i -= 2;
    //"another way" i = i - 2
    //"another way" console.log(i);
// } while (i !== 0)
//
// console.log("Sorry, this parking lot is now full.");


//while loop
//TODO: using prompt() and alert(), write a while loop that will continue to ask for the correct password until the
//  correct password is given.

let password = "password";
let isCorrect = false;

while (!isCorrect) {
    isCorrect = prompt("Please enter your password...") === password;

    if (!isCorrect) {
        alert("That was not the correct password...");
    }
}
alert("You entered the correct password. Welcome to the net");