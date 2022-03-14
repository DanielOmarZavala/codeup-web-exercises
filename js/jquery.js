"use strict"

// $(document).keyup(function(event){
//     console.log(event.keyCode);
// });

let myKonami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiPosition = 0;

$(document).keyup(function (e) {
    console.log(e.keyCode);
    let expectedKey = myKonami[konamiPosition];
    let keyPressed = e.keyCode;

    if (expectedKey === keyPressed) {
        konamiPosition++;

        if(konamiPosition === myKonami.length) {
            alert("added 30 lives");
            konamiPosition = 0;

            $("body").css("background-color", "blue");
        }
    } else {
        konamiPosition = 0;
    }
});