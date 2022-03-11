"use strict"

$(document).ready(function() {

/*jquery INTRODUCTION EXERCISE*/
// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });

/*SELECTORS EXERCISE */
/*POPULATE HTML BODY*/
$("body").append(createBody());

function createBody () {
    return '<h1 id="top-heading" class="top-heading">jquery</h1>' +
        '<p id="p-tag" class="codeup">' +
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci amet dolor dolore eligendi esse eum exercitationem rem sit voluptatum.' +
        '</p>' +
        '<ul id="ul-element" class="ul-element">' +
        '<li id="li-element" class="codeup">li element</li>' +
        '</ul>' +
        '<div id="div-element" class="codeup">div element</div>';
}

/*ID SELECTORS*/
// let topHeading = $("#top-heading").html();
// alert(topHeading);
//
// let pTag = $("#p-tag").html();
// alert(pTag);

/*CLASS SELECTORS*/
// $(".codeup").css("border", "1px solid red");

/*ELEMENT SELECTORS*/
// $("li").css("font-size", "20px");
// $("h1").css("background-color", "yellow");
// $("p").css("background-color", "yellow");
// $("li").css("background-color", "yellow");
// alert($("h1").html());

/*MULTIPLE SELECTORS*/
// $("h1, p, li").css("background-color", "yellow");


/*MOUSE EVENTS EXERCISE*/
$("h1").click(function() {
    $(this).css("background-color", "red");
});

$("p").dblclick(function() {
   $(this).css("font-size", "18px");
});

$("li").hover(function() {
    $(this).css("color", "red");
}, function() {
    $(this).css("color", "black");
});



/*CASEY'S EXAMPLE*/
//     $("nav-bar").css("background-color", "green");
//
//     $("div.container-fluid > p.col-12").hover(function() {
//     //hover-in function
//     $(this).css("background-color", "lightblue");
// }, function() {
//     $(this).css("background-color", "none");
// });



    /*RY'S MOUSE EVENTS LECTURE*/
    // $("li").click(function () {
    //     console.log($(this).css("background-color"));
    //     if ($(this).css("background-color") === "rgba(0, 0, 0, 0)") {
    //         $(this).css("background-color", "yellow");
    //     } else {
    //         $(this).css("background-color", "rgba(0, 0, 0, 0)");
    //     }
    //
    // });
    //
    // $("h1").dblclick(function(e) {
    //     console.log("e");
    //     $(this).css("color", "teal");
    // });
    //
    // $(".top-heading").hover (function () {
    //
    // }, function () {
    //     $(this).css("font-style", "italic");
    // }, function () {
    //     $(this).css("font-style", "normal");
    // });

    /*KEYBOARD EVENTS*/
    // $("#search").keydown(function (e) {
    //     console.log(e.key);
    // });

    /*KONAMI CODE*/

    // let myKonami = [82, 89, 65];
    // let konamiPosition = 0;
    //
    // $(document).keyup(function (e) {
    //     console.log(e.keyCode);
    //     let expectedKey = myKonami[konamiPosition];
    //     let keyPressed = e.keyCode;
    //
    //     if (expectedKey === keyPressed) {
    //         konamiPosition++;
    //
    //         if(konamiPosition === myKonami.length) {
    //             alert("added 30 lives");
    //             konamiPosition = 0;
    //         }
    //     } else {
    //         konamiPosition = 0;
    //     }
    // });

});