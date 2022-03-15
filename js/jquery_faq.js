"use strict"

$(document).ready(function (){


$('dd').addClass('invisible');

$('dl').after('<button id="toggle-button">Toggler</button>');

$('#toggle-button').click(function(){
    $('dd').toggleClass('invisible');

});

$('dt').click(function (){
    $(this).css('background-color', 'yellow');
});
});