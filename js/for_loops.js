"use strict";

//Multiplication Table - For Loop
// var multiplyBy = 1
//
// for (let i = 0; i < 10; i++) {
//     function showMultiplicationTable(numberIn) {
//         console.log(numberIn * multiplyBy);
//         multiplyBy += 1;
//     }
//     showMultiplicationTable(7);
// }

//Random Odd/Even Console.log - For Loop
// function isOddOrEven (numIn) {
//     if (numIn % 2 === 0) {
//         console.log(numIn + " is even!");
//     } else if (numIn % 2 !== 0) {
//         console.log(numIn + " is odd!");
//     } else {
//         console.log("Something went wrong...");
//     }
// }
//
// for (let i = 0; i < 10; i++) {
//     var numPool = Math.floor(Math.random() * 200) + 20;
//
//     isOddOrEven(numPool);
// }

//Number pseudo number pyramid
for (let i = 1; i <= 9; i++) {
    let sameLine = '';

    for (let j = i; j > 0; j--) {
        sameLine += i + ' ';
    }
    console.log(sameLine);
}


