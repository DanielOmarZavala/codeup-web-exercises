"use strict"

// console.log("test file");
//
// let customer = {
//     wallet: 0,
//     status: function {
//         if () {
//
//         }
//     };
// };
//
// function status (statusIn) {
//
// }
//
// let statusIn = prompt("What is your status?");




/*FUNCTION DEFINITION*/
let handler = function (event) {
    alert("You clicked something!");
}

/*FUNCTION EXPRESSION ONLY ACCESSIBLE BELOW FUNCTION*/
// document.addEventListener("click", handler);

/*FUNCTION EXPRESSION & DEFINITION BETTER OPTION*/
// document.addEventListener("click", function() {
//     alert("You clicked something!");
// });

/*THREE STEPS OF EVEN LISTENERS*/
/*ACCES (GRAB) ELEMENT*/
let header = document.querySelector("#main-header");

/*ATTACH EVENT LISTENER*/
header.addEventListener("click", headerClick);

// WHAT HAPPENS ON HEADER CLICK
function headerClick(event) {
    header.style.backgroundColor = "yellow";
}


let input = document.querySelector("#search");

// input.addEventListener("keyup", function (event) {
//     // PRINT ELEMENT
//     console.log(event.target);
//
//     // PRINT KEY CODE
//     console.log(event.code);
// });

input.addEventListener("keyup", upperCaseTextInput)

function upperCaseTextInput(event) {
    console.log(event.target.value);
    event.target.value = event.target.value.toUpperCase();
}


let moreBtn = document.querySelector("#more");

moreBtn.addEventListener("click", function (e) {
    let p = e.target.previousElementSibling
    if (p.classList.contains("hidden")) {
        p.classList.remove("hidden");
        e.target.innerText = "Less";
    } else {
        p.classList.add("hidden");
        e.target.innerText = "More";
    }
});


