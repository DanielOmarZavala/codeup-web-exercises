"use strict";

function canGetRideshare(driverNear, enoughFunds){
    if (driverNear && enoughFunds){
        return true;
    }else{
        return false;
    }
}

function getToDestination(age, isInsured, hasCar){
    if (age > 16 && isInsured && hasCar){
        console.log("You can use your own vehicle.");
    }else if ((age <= 16 && !isInsured || !hasCar) && canGetRideshare(true, true)){
        console.log("You can call up a rideshare!");
    }else{
        console.log("Sorry, try calling a friend for a ride!");
    }
}

getToDestination(16, false, true);