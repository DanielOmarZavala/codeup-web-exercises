"use strict"

// $('body').append(getNewParagraph());
// $('body').insertBefore(getNewParagraph());
// $('body > script').first().before($(getNewParagraph()).addClass('test-class'));

//log out the text contents of EACH selected element
// $('body > div > p').each(function(){
//     console.log($(this).text());
// });
//
// $('ul > li').each(function(){
//     if ($(this).first().text() === 'Global Domination') {
//         $(this).first().text('Global.. benevolence...')
//     }
// });
//
//
//
// //language=HTML
// function getNewParagraph() {
//     return '<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
//         'Aspernatur corporis eos fuga iure laudantium nam nisi totam ut veniam vitae!</p></div>'
// }

$('dd').addClass('invis');

$('dl').after('<button id="toggle-button">Toggler</button>');

$('#toggle-button').click(function(){
    $('dd').toggleClass('invis');
})