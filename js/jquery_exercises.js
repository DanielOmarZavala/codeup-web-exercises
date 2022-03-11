"use strict"

// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });

$("body").append(getTemplate());

function getTemplate () {
    return '<h1 id="top-heading" class="heading">jquery</h1>' +
        '<p id="p-tag" class="p-tag">' +
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci amet dolor dolore eligendi esse eum exercitationem rem sit voluptatum.' +
        '</p>' +
        '<ul id="ul-element" class="ul-element">' +
        '<li id="li-element" class="li-element">li element</li>' +
        '</ul>' +
        '<div id="div-element" class="div-element">div element</div>';
}

let topHeading = $("#top-heading").html();
alert(topHeading);

let pTag = $("#p-tag").html();
alert(pTag);

// $("#heading").html(function() {
//     alert(this);
// });

//     $("nav-bar").css("background-color", "green");
//
//     $("div.container-fluid > p.col-12").hover(function() {
//     //hover-in function
//     $(this).css("background-color", "lightblue");
// }, function() {
//     $(this).css("background-color", "none");
// });

