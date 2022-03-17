"use strict"

$(document).ready(function () {

    //create box-one empty block element after search-container
    $('#search-container').after("<section id='box-one'></section> ");

    let initlat = 29.5696;
    let initlon = 98.7068;

    wxFetch(initlat, initlon);

    //fetch and build html (powerhouse)
    function wxFetch(lat, lon) {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=${lat}&lon=${lon}&appid=${OWM_KEY}`)
            .then(response => response.json())
            .then(response => renderDailyForecast(response))
            .catch(err => console.error(err));
    }

    function renderDailyForecast(response) {
        console.log(response.daily);
        $('#box-one').html(createDailyForecast(response.daily));
    }
    //loop through daily data for cards and send to cardForge, then grab & apply cards to main section
    function createDailyForecast(dailyObjArr) {

        let html = '<div class="row">';

        for (let i=0; i < 5; i++) {
            html += cardForge(dailyObjArr[i]);
        }

        html += '<div>';

        return html;
    }
    //create single card
    function cardForge (dayObj) {

    }

    //dynamic location
    $('#submit').click(function (e) {
        e.preventDefault();
        let latIn = $('#lat-in').val();
        let lonIn = $('#lon-in').val();
        wxFetch(latIn, lonIn);
    })

});