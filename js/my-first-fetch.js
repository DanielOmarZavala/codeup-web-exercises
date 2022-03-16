"use strict"

// let lat = 33.44;
// let lon = -94.04;
// let units = "imperial";
//
//
// //do fetch stuff
// fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat + "&lon=-94.04&units=imperial&appid=" + OWM_KEY)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         let html = "";
//         html += '<ul>'
//         // for (let i = 0; i < data.daily.length; i++) {
//         //     console.log(data.daily[i].temp.day);
//         // }
//
//         for (let i = 0; i < 5; i++) {
//             let dailyTemp = data.daily[i].temp.day
//
//             html += '<li>' + dailyTemp + '</li>';
//         }
//
//         html += '</ul>';
//
//         $('#weather').html(html);
//     });

$(document).ready(function () {

    $('body').prepend("<section id=box-one></section>");

    /*DO FETCH STUFF*/
    fetch("https://swapi.dev/api/planets/")
        .then(response => response.json())
        .then(data => {

            console.log(data);

            // data.results.map((planet)=> {
            //     console.log(planet);
            // });

            let boxHtmlOne = "";
            // let boxHtmlTwo = "";
            // let boxHtmlThree = "";

            boxHtmlOne += '<div class="row">'
            // boxHtmlTwo += '<div>'
            // boxHtmlThree += '<div>'

            for (let i = 0; i <= 2; i++) {
                let pNameOne = data.results[i].name;

                let pClimateOne = data.results[i].climate;

                let popOne = data.results[i].population;

                boxHtmlOne += '<div class="col-4"><p class="d-flex justify-content-center align-items-center">' + '<strong>' + pNameOne + '</strong>' + '</p>' + '<ul class="d-flex justify-content-center align-items-center">' + '<li>' + '<strong>' + 'Climate: ' + pClimateOne + '<strong>' + '</li>' + '<li>' + '<strong>' + 'Population: ' + popOne + '<strong>' + '</li>' + '</ul></div>';
            }
            boxHtmlOne += '</div>';
            // boxHtmlTwo = '</div>';
            // boxHtmlThree = '</div>';

            $('#box-one').html(boxHtmlOne);
            // $('#box-two').html(boxHtmlTwo);
            // $('#box-three').html(boxHtmlThree);
        });
});