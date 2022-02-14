"use strict"

/*Find and Return the average of an array*/
// let listNums = [95,74,86,100];
//
// function findAverage (list) {
//     let total = 0;
//
//     for (let i = 0; i < listNums.length; i++) {
//        total += list[i];
//     }
//     return total / listNums.length;
// }
//
// console.log(findAverage(listNums));

/*Date Example*/
let dt = new Date().toISOString();
console.log(dt.split('T')[0]);
//Testing WITHOUT .split - console.log(dt);

/*let dt = new Date().toISOString(); WILL RETURN 2022-02-14

let dt = new Date().toString(); WILL RETURN Mon Feb 14 2022 09:53:13 GM

let dt = new Date().toString(); with NO console.log and NO .split WILL RETURN Mon Feb 14 2022 09:53:30 GMT-0600 (Central Standard Time)*/
