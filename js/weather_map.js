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
        for (let i = 0; i < 5; i++) {
            html += cardForge(dailyObjArr[i]);
        }
        html += '<div>';
        return html;
    }
    //fix date
    function extractWxDt(dayObj){
        return {
            date: dayObj.dt
        }
    }
    //fix date
    function modWxDt(rawDt){
        return new Date(rawDt.date * 1000).toISOString().split('T')[0];
    }
    //create single card
    //language=HTML
    function cardForge(dayObj) {
        let html = '';
        let rawDate = extractWxDt(dayObj);
        let modDate = modWxDt(rawDate);
        html += `
            <div class="card" style="width: 18rem;">
                <h5 class="card-title">${modDate}</h5>
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">${dayObj.temp.max} <span id="temp-low">${dayObj.temp.min}</span></p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Feels like: ${dayObj.feels_like.day}</li>
                    <li class="list-group-item">Humidity: ${dayObj.humidity}</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>`
        return html
    }

    //dynamic location
    $('#submit').click(function (e) {
        e.preventDefault();
        let latIn = $('#lat-in').val();
        let lonIn = $('#lon-in').val();
        wxFetch(latIn, lonIn);
    })

});