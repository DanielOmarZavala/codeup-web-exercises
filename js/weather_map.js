"use strict"

$(document).ready(function () {

    //create box-one empty block element after search-container
    $('#search-container').after("<section id='box-one'></section> ");

    let initlat = 29.5696;
    let initlon = 98.7068;

    wxFetch(initlat, initlon);

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

    function createDailyForecast(dailyObjArr) {
        let html = '<div class="row">';
        for (let i=0; i < 5; i++) {
            html += createWxCard(dailyObjArr[i]);
        }
        html += '<div>';
        return html;
    }

    function createWxCard (dayObj) {

    }

    $('#submit').click(function (e) {
        e.preventDefault();
        let latIn = $('#lat-in').val();
        let lonIn = $('#lon-in').val();
        wxFetch(latIn, lonIn);
    })

});