"use strict"

/*jquery INTRODUCTION EXERCISE*/
// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });

/*POPULATE HTML BODY*/
$("body").append(getTemplate());

function getTemplate () {
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
$("li").css("font-size", "20px");
// $("h1").css("background-color", "yellow");
// $("p").css("background-color", "yellow");
// $("li").css("background-color", "yellow");
alert($("h1").html());

$("h1, p, li").css("background-color", "yellow");




/*CASEY'S EXAMPLE*/
//     $("nav-bar").css("background-color", "green");
//
//     $("div.container-fluid > p.col-12").hover(function() {
//     //hover-in function
//     $(this).css("background-color", "lightblue");
// }, function() {
//     $(this).css("background-color", "none");
// });

