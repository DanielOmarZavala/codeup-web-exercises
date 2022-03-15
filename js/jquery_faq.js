"use strict"

$(document).ready(function () {
    //add invisible class to dd tags
    $('dd').addClass('invisible');
    //add a button after dl
    $('dl').after('<button id="toggle-button">Toggler</button>');
    // $('dl').after('<a href="#" id="toggle-button">Toggler</button>');

    //toggle invisible class
    $('#toggle-button').click(function () {
        $('dd').toggleClass('invisible');

    });

    $('dt').click(function () {
        $(this).toggleClass('yellow-bg')
    });

    //2nd
    $('#highlighter').click(function (){
        $('ul').each(function (){
            $(this).children().last().toggleClass('yellow-bg');
        });
    });

    $('h3').click(function (){
        $(this).next().children().toggleClass('bold-font');
    });

    $('li').click(function (){
        //li TO ul TO all children lis TO first li
        $(this).parent().children().first().css('color', 'blue');
    });
});