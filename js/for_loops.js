"use strict";

//1. Multiplication Table - For Loop
// var multiplyBy = 1
//
// for (let i = 0; i < 10; i++) {
//     function showMultiplicationTable(numberIn) {
//         console.log(numberIn * multiplyBy);
//         multiplyBy += 1;
//     }
//     showMultiplicationTable(7);
// }

//2. Random Odd/Even Console.log - For Loop w/ Function
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

//3. Pseudo Number Pyramid - For Loop
// for (let i = 1; i <= 9; i++) {
//     let sameLine = '';
//
//     for (let j = i; j > 0; j--) {
//         sameLine += i + '';
//     }
//     console.log(sameLine);
// }

//4. Subtract 5 from 100 to 5
for (let i = 100; i >= 5; i -= 5 ) {
    console.log(i);
}


