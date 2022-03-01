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
// let dt = new Date().toISOString();
// console.log(dt.split('T')[0]);
//Testing WITHOUT .split - console.log(dt);

/*let dt = new Date().toISOString(); WILL RETURN 2022-02-14

let dt = new Date().toString(); WILL RETURN Mon Feb 14 2022 09:53:13 GM

let dt = new Date().toString(); with NO console.log and NO .split WILL RETURN Mon Feb 14 2022 09:53:30 GMT-0600 (Central Standard Time)*/

// let person = {
//     dob: "1/2/1998",
//     occupation: "Sky Diving Coach",
//     names: ["George", "Jackson"]
// };
//
// person.names.forEach(function(name){
//     //console.log(name);
// });
//
// let person2 = Object.create(person);
// person2["names"] = ["Ry", "Sutton"];
// person2.occupation = "Fab Father";
// person2.dob = "01.01.1992";
// //console.log(person2);
//
// person2["dob"] = "01.02.1992";
// //console.log(person2);
//
// let person3 = Object.assign({}, person);
// console.log(person3);


/*CONSTRUCTOR FUNCTION*/

/*Defines a contact info object*/
// function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress){
//     this.phoneNumber = phoneNumber;
//     this.streetAddress = streetAddress;
//     this.city = city;
//     this.state = state;
//     this.postalCode = postalCode;
//     this.emailAddress = emailAddress;
// }
//
// /*Defines a person object*/
// function Person(names, occupation, dob, contactInfo) {
//     this.names = names;
//     this.occupation = occupation;
//     this.dob = dob;
//     this.contactInfo = contactInfo;
// }
//
// /*makes a new person object instance (by invoking the constructor)*/
// let person2 = new Person(
//     ["Casey", "J", "Edwards"],
//     "Cat Herder / Firefighter",
//     "11.30.1989",
//     new ContactInfo(
//         '123.456.7890',
//         '123 Anywhere Ln',
//         'Beverly Hills',
//         'CA',
//         '90210',
//         'nope@no-no-no.no'));
//
// console.log(person2.contactInfo.emailAddress);

// let randomNum = Math.random();
// console.log(randomNum);
// console.log((randomNum * 10));
//
// let rangedNum = Math.floor((randomNum * (100 - 20) + 1)) + 20;
// console.log(rangedNum);



/*
JS Object Warmup, pt 4:
We are going to create a method which
 allows a user to input their desired amount of names names
use prompt, alert, confirm inside of a while loop
assign each name to an array
once the user decides they are done giving names, end the loop and return the string array
then assigning that returned array by invoking your new function on the Person.names property value!
Things to consider:
Should this be a standalone function or should it be a method on the Person object?
* */


/*
JS Object Warmup, pt 4:
We are going to create a method which
 allows a user to input their desired amount of names names
use prompt, alert, confirm inside of a while loop
assign each name to an array
once the user decides they are done giving names, end the loop and return the string array
then assigning that returned array by invoking your new function on the Person.names property value!
Things to consider:
Should this be a standalone function or should it be a method on the Person object?
* */


// // Defines a contact info object
// function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress) {
//     this.phoneNumber = phoneNumber;
//     this.streetAddress = streetAddress;
//     this.city = city;
//     this.state = state;
//     this.postalCode = postalCode;
//     this.emailAddress = emailAddress;
// }
//
// // Defines a person object
// function Person(occupation, dob, contactInfo) {
//     // assign a property the value of a function *definition*
//     // this helps get the names of a person, but is not executed until you invoke getNames
//     this.getNames = getNames;
//     // actually *invoke* this.getNames() so the names are given when the Person object is created
//     this.names = this.getNames();
//     this.occupation = occupation;
//     this.dob = dob;
//     this.contactInfo = contactInfo;
// }
//
// // This function helps define *how* a user gives their names and returns
// // those names as a string array
// function getNames() {
//     let namesArr = [];
//     let hasMoreNames = true;
//     while (hasMoreNames) {
//         // get those names!
//         namesArr.push(prompt("Please enter your desired name"));
//
//         // if they want more names, keep looping. if not, break the loop
//         hasMoreNames = confirm("Would you like to enter another name?");
//     }
//     return namesArr;
// }
//
// // Make a new ContactInfo object
// let contact = new ContactInfo(
//     '123.456.7890',
//     '123 Anywhere Ln',
//     'Beverly Hills',
//     'CA',
//     '90210',
//     'nope@no-no-no.no');
//
// // Make new Person object
// let person2 = new Person(
//     "Cat Herder / Firefighter",
//     "11.30.1989",
//     contact
// );
//
// // Log the object so we can see its values
// console.log(person2);



/*Warmup 5: Create a function which returns true if the given argument is a number, false if it is not a number*/
function isNum (valIn) {
    return typeof valIn === typeof 2;
}

let test = {
    num: 2,
    notNum: "3"
};

console.log(isNum(test.num));

/*Warmup 6: Create a function that removes a specific string from an array, then returns and logs the changes*/
let bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

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
