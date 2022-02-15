"use strict";

/*Function 1*/
// function isTrue (valueIn) {
//     return valueIn === true;
// }
//
// console.log(isTrue (true));

/*Function 2*/
// function isFalse (valueIn) {
//     return valueIn === false;
// }
//
// console.log(isFalse (false));

/*Function 3*/
/*Created with assistance from Uziel Carranza && Ry*/
// function not (valueIn) {
//     return !valueIn;
// }
//
// console.log(not (123));

/*My poor and sad failed attempt*/
// function not (valueIn) {
//     if (typeof valueIn === typeof "string") {
//         return false;
//     } else {
//         return valueIn !== true;
//     }
// }

/*Function 4*/
function addOne (valueIn) {
    if (typeof valueIn === typeof "123") {
        function convertToNum(numericString) {

            return parseInt(numericString);
        }
        return console.log((convertToNum(valueIn)) + 1);
    }



    // } else if (typeof valueIn === typeof 2) {
    //     return ;
    // }
}

addOne ("123");

