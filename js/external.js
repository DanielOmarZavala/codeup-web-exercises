"use strict";

//CALL STACKING EXAMPLE:
//alert(prompt("What is your favorite color?.") + " " + "is my favorite color too!");



// console.log("Hello from external javascript");
//
// let userColorIn = prompt("What is your favorite color?");
//
// alert("Great! My favorite color is " + userColorIn + " too!");

// FINAL JS WITH HTML EXERCISE #1

// let costPerDay = prompt("Please enter per day rental cost.");
// let numOfMoviesRented = prompt("Please enter the amount of rentals");
//
// var totalCharge = 0;
//
// for (let i = numOfMoviesRented; i >= 1; i--) {
//
//     if (i < numOfMoviesRented) {
//         var rentDur = prompt("Please enter the next rental duration.");
//     } else {
//         rentDur = prompt("Please enter a rental duration.");
//     }
//     var indMovieCharge = costPerDay * rentDur;
//     totalCharge = totalCharge + indMovieCharge;
//  }
//
// alert("Your total today is " + totalCharge);


//INSTRUCTOR VERSION:

// let lilMermaid = parseInt(prompt("How long did you rent Little Mermaid?"));
// let broBear = parseInt(prompt("How long did you rent Brother Bear"));
// let herc = parseInt(prompt("How long did you rent Hercules?"));
//
// alert((lilMermaid + broBear + herc) * 3);

//(KEEP THIS LINE COMMENTED)console.log(lilMermaid ? lilMermaid * 3 : "You didn't enter a number");



//FINAL JS WITH HTML EXERCISE #2

//INSTRUCTOR VERSION:

// let googleHours = parseInt(prompt("How many hours did you work for Google?")) * 400;
// let fbHours = parseInt(prompt("How many hours did you work for Facebook?")) * 350;
// let amazonHours = parseInt(prompt("How many hours did you work for Amazon?")) * 380;
//
// alert("Your paycheck is: " + (googleHours + fbHours + amazonHours));



//FINAL JS WITH HTML EXERCISE #3

// let classFullChk = prompt("Is the class full? Enter true or false");
// let classScheduleConflict = prompt("Does this class selection conflict with your schedule? Enter true or false");
//
// var isClassFullTrueChk = (classFullChk === "true");
// var isClassScheduleConflictChk = (classScheduleConflict === "true")
//
// if (!isClassFullTrueChk && !isClassScheduleConflictChk) {
//     alert("Congratulations! You are enrolled!");
// } else {
//     alert("Sorry, you cannot be enrolled at this time.");
// }


//INSTRUCTOR VERSION not complete just an example:

// let hasConflict = confirm("Do you have a class at 10am?");
// let seatsRemaining = 29;
//
// if (!hasConflict && seatsRemaining){
//     alert("You are enrolled in Theoretical History of Existential Nihilism.. congrats...or not...");
// }



//FINAL JS WITH HTML EXERCISE #4

// let premiumFlag = prompt("Do you have premium status? Enter true or false");
// var isPremiumChk = (premiumFlag === "true");
//
// let offerStatus = prompt("Has the offer expired? Enter true or false");
// var isOfferChk = (offerStatus === "true");
//
// if (!isPremiumChk && isOfferChk) {
//     let purchasedTwoItems = prompt("Have you purchased two items? Enter true or false.");
//     var isPurchasedTwoItemsChk = (purchasedTwoItems === "true");
//     alert("Standard Purchase Successful!");
// } else if {
//     f
// }


