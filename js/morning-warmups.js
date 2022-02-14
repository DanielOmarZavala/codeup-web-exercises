"use strict"

//Find and Return the average of an array
let listNums = [95,74,86,100];

function findAverage (list) {
    let total = 0;

    for (let i = 0; i < listNums.length; i++) {
       total += list[i];
    }
    return total / listNums.length;
}

console.log(findAverage(listNums));