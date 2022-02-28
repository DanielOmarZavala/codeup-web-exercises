/*
"use strict"

console.log("test file");

let customer = {
    wallet: 0,
    status: function {
        if () {

        }
    };
};

function status (statusIn) {

}

let statusIn = prompt("What is your status?");*/

// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
// function removeAll (arrIn, remove) {
//     return arrIn.pop(remove);
// }
//
// console.log(removeAll(bugs, "ant"));


// should print
// [
//     'mosquito',
//     'scorpion',
//     'mosquito',
//     'typo',
//     'reference error',
//     'type error'
// ]

var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

function removeAll(anArr,valueToRemove) {
    let filteredArr = [];
    anArr.forEach(function(ele) {
        if (valueToRemove !== ele) {
            filteredArr.push(ele);
        }
    });
    return filteredArr;
}

console.log(removeAll(bugs, "ant"));

