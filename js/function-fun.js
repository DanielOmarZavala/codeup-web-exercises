"use strict";



tryGetRideshare(20, true, getFundsAvailable());

function getFundsAvailable(){
    let moneyInAccount = parseFloat(prompt("How much is in the account"));
    let creditsInAccount = parseFloat(prompt("How much is in the account"));

    return moneyInAccount + creditsInAccount;

}

function tryGetRideshare(costOfRide, driverAvailable, totalFundsAvailable){

    let numOfRiders;

    if(confirm("Are you splitting this ride with someone else?")){
        numOfRiders = prompt("How many riders do you have?");
    }

    //don't know how much the ride is going to be
    //don't know if the driver is ready
    //money sources??
    //how much money is available?

    if (driverAvailable && totalFundsAvailable >= costOfRide){
        console.log("Your ride is on the way");
    }else{
        console.log("No drivers are available at this time...");
    }
}