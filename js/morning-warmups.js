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

// Defines a contact info object
// function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress){
//     this.phoneNumber = phoneNumber;
//     this.streetAddress = streetAddress;
//     this.city = city;
//     this.state = state;
//     this.postalCode = postalCode;
//     this.emailAddress = emailAddress;
// }
// Defines a person object
// function Person(names, occupation, dob, contactInfo) {
//     this.names = names;
//     this.occupation = occupation;
//     this.dob = dob;
//     this.contactInfo = contactInfo;
// }
// makes a new person object instance (by invoking the constructor)
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

// console.log(person2.contactInfo.emailAddress);

// let randomNum = Math.random();
// console.log(randomNum);
// console.log((randomNum * 10));
//
// let rangedNum = Math.floor((randomNum * (100 - 20) + 1)) + 20;
// console.log(rangedNum);


var circle = {
    radius: 3,
    getArea: function () {
        // TODO: complete this method

        return Math.PI * circle.radius ^ 2; // TODO: return the proper value
    }
};

console.log(circle.getArea());
