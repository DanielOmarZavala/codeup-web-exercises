"use strict"

$(document).ready(function(){

    //create box-one empty block element after search-container
    $('#search-container').after("<section id='box-one'></section> ");

    let lat = 29.5696;
    let lon = 98.7068;

    wxData(lat, lon);

    function wxData (lat, lon) {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=${lat}&lon=${lon}&appid=${OWM_KEY}`)
            .then(response => response.json())
            .then(response => renderDailyForecast(response))
            .catch(err => console.error(err));
    }

    function getSanitizedResponse(response) {
        console.log(response.daily);
        $('#box-one').html(renderDailyForecast(response.daily));
    }

    function renderDailyForecast (response){

    }
});