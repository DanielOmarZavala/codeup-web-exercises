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


// fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat + "&lon=-94.04&units=imperial&appid=asdfklj3443523lkjsfdlgkjdsfg4554645lkjdhlkdfhj", options)
//     .then(response => response.json())
//     .then(response => getSanitizedResponse(response))
//     .then(sres => renderDailyForecast(sres))
//     .catch(err => console.error(err));

// function getSanitizedResponse(dataBody) {
//     return dataBody.main;
// }
//
// //language=HTML
// function renderDailyForecast(forecast) {
//     console.log(forecast);
//     $('body').append(`
//         <div><h3>Temperature Feels Like:</h3><p>${forecast.feels_like}</p></div>`);
// }

$(document).ready(function () {

    $('body').prepend("<section id=box-one></section>");

    /*DO FETCH STUFF*/
    fetch("https://swapi.dev/api/planets/")
        .then(response => response.json())
        .then(data => popBody(data))
        .catch(err => console.error(err));

//language=HTML
    function popBody(dataIn) {

        console.log(dataIn);

        let mappedArr = dataIn.results.map((planet) => {
            if (planet.name.toLowerCase() === 'tatooine') {
                planet.backgroundImg = "data:image/jpeg;base64,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";
            }
            return planet;
        });
        console.log(mappedArr);
        let boxHtmlOne = $('<div class="row"></div>');
        mappedArr.forEach((planet)=>{
            let pNameOne = planet.name;

            let pClimateOne = planet.climate;

            let popOne = planet.population;

            boxHtmlOne.append(`
                <div style="background: url(${planet.backgroundImg})" class="col-4"><p class="d-flex justify-content-center align-items-center">
                    <p><strong> ${pNameOne} </strong></p>
                    <ul class="d-flex justify-content-center align-items-center">
                        <li><strong>Climate: ${pClimateOne}<strong></li>
                        <li><strong>Population: ${popOne} <strong></li>
                    </ul>
                </div>`)
        });
        $('#box-one').html(boxHtmlOne);
    }
});