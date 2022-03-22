"use strict"

$(document).ready(function () {
    /* Wx Variables */
    let initLat = 29.5696;
    let initLon = -98.7068;
    let time;

    /* Map Util Variables */
    let map = initMap(initLon, initLat);
    let marker = createMarker(initLon, initLat)
    let popup = createPopup(initLon, initLat)

    /* create box-one empty block element after search-container */
    $('#search-container').after("<section id='box-one'></section>");

    wxFetch(initLat, initLon);

    /* fetch and build html (powerhouse) */
    function wxFetch(lat, lon) {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=${lat}&lon=${lon}&appid=${OWM_KEY}`)
            .then(response => response.json())
            .then(response => renderDailyForecast(response))
            .catch(err => console.error(err));
    }

    function renderDailyForecast(response) {
        $('#box-one').html(createCurrentWx(response.daily));
        $('.content').html(createDailyForecast(response.daily));
    }

    /* loop through daily data for cards and send to cardForge, then grab & apply cards to main section */
    function createCurrentWx(dailyObjArr) {
        let html = '<div class="row justify-content-center align-items-center">';
        for (let i = 0; i <= 0; i++) {
            html += cardForge(dailyObjArr[i]);
        }
        html += '<div>';
        return html;
    }

    /* loop through daily data for cards and send to cardForge, then grab & apply cards to main section */
    function createDailyForecast(dailyObjArr) {
        let html = '<div class="row justify-content-center align-items-center">';
        for (let i = 1; i < 5; i++) {
            html += cardForgeForecast(dailyObjArr[i]);
        }
        html += '<div>';
        return html;
    }

    //fix date
    function modWxDt(UNIX_timestamp) {
        // return new Date(rawDt.date * 1000).toISOString().split('T')[0];
        //Converts UNIX timestamp to Day Month Year format
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        time = date + ' ' + month + ' ';
        return time;
    }

    /* Create Single Card with CardForge*/

    //language=HTML
    function cardForge(dayObj) {
        let html = '';
        let rawDate = dayObj.dt;
        let modDate = modWxDt(rawDate);

        if (dayObj.weather[0].main === "Clear") {
            html += `
                <div class="cards row col-3">
                    <h5>${modDate}</h5>
                    <div id="p-container" class="col-4">
                        <p class=""><span id="temp-high">${Math.round(dayObj.temp.max)}&deg</span> <span
                                id="temp-low">${Math.round(dayObj.temp.min)}&deg</span></p>
                    </div>
                    <ul class="col-5 justify-content-around">
                        <li class="list-item">Feels like: ${dayObj.feels_like.day}</li>
                        <li class="list-item">Humidity: ${dayObj.humidity}</li>
                    </ul>
                    <div>
                    </div>
                </div>`
        } else if (dayObj.weather[0].main === "Rain") {
            html += `
                <div style="background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(77,26,106,1) 50%, rgba(154,0,242,1) 100%);"
                     class="cards row col-3">
                    <h5>${modDate}</h5>
                    <div id="p-container" class="col-4">
                        <p class=""><span id="temp-high">${Math.round(dayObj.temp.max)}&deg</span> <span
                                id="temp-low">${Math.round(dayObj.temp.min)}&deg</span></p>
                    </div>
                    <ul class="col-5 justify-content-around">
                        <li class="list-item">Feels like: ${dayObj.feels_like.day}</li>
                        <li class="list-item">Humidity: ${dayObj.humidity}</li>
                    </ul>
                    <div>
                    </div>
                </div>`
        } else if (dayObj.weather[0].main === "Clouds") {
            html += `
                <div style="background: rgb(2,0,36);
                background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(106,26,26,1) 50%, rgba(242,0,0,1) 100%);">
                    class="cards row col-3">
                    <h5>${modDate}</h5>
                    <div id="p-container" class="col-4">
                        <p class=""><span id="temp-high">${Math.round(dayObj.temp.max)}&deg</span> <span
                                id="temp-low">${Math.round(dayObj.temp.min)}&deg</span></p>
                    </div>
                    <ul class="col-5 justify-content-around">
                        <li class="list-item">Feels like: ${dayObj.feels_like.day}</li>
                        <li class="list-item">Humidity: ${dayObj.humidity}</li>
                    </ul>
                    <div>
                    </div>
                </div>`
        }


        return html
    }

    /* Create 4 Cards in Popup with CardForgeForecast*/

    //language=HTML
    function cardForgeForecast(dayObj) {
        let html = '';
        let rawDate = dayObj.dt;
        let modDate = modWxDt(rawDate);
        if (dayObj.weather[0].main === "Clear") {
            html += `
                <div class="cards row col-12">
                    <h5 id="popH">${modDate}</h5>
                    <div id="p-container" class="col-12">
                        <p class="popP"><span id="temp-high">${Math.round(dayObj.temp.max)}&deg</span> <span
                                id="temp-low">${Math.round(dayObj.temp.min)}&deg</span></p>
                    </div>
                    <div id="p-container" class="col-12">
                        <p id="humidity">Humidity: ${dayObj.humidity}</p>
                    </div>
                </div>`
        } else if (dayObj.weather[0].main === "Rain") {
            html += `
                <div style="background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(77,26,106,1) 50%, rgba(154,0,242,1) 100%);"
                     class="cards row col-12">
                    <h5 id="popH">${modDate}</h5>
                    <div id="p-container" class="col-12">
                        <p class="popP"><span id="temp-high">${Math.round(dayObj.temp.max)}&deg</span> <span
                                id="temp-low">${Math.round(dayObj.temp.min)}&deg</span></p>
                    </div>
                    <div id="p-container" class="col-12">
                        <p id="humidity">Humidity: ${dayObj.humidity}</p>
                    </div>
                </div>`
        } else if (dayObj.weather[0].main === "Clouds") {
            html += `
                <div class="cards row col-12" style="background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(106,26,26,1) 50%, rgba(242,0,0,1) 100%);">
                    <h5 id="popH">${modDate}</h5>
                    <div id="p-container" class="col-12">
                        <p class="popP"><span id="temp-high">${Math.round(dayObj.temp.max)}&deg</span> <span
                                id="temp-low">${Math.round(dayObj.temp.min)}&deg</span></p>
                    </div>
                    <div id="p-container" class="col-12">
                        <p id="humidity">Humidity: ${dayObj.humidity}</p>
                    </div>
                </div>`
        }


        return html
    }

    //dynamic location
    $('#submit').click(function (e) {
        e.preventDefault();
        let latIn = $('#lat-in').val();
        let lonIn = $('#lon-in').val();
        wxFetch(latIn, lonIn);
    });

    /*YOU HAVE REACHED THE MAPBOX JS SECTION*/


    marker.setPopup(popup);
    marker.setDraggable(true);

    /* Assign Clicked Coords to Wx Data */
    map.on('click', (e) => {
        wxFetch(`${e.lngLat.lat}`, `${e.lngLat.lng}`);
        marker.setLngLat([e.lngLat.lng, e.lngLat.lat]);
    });

    /* Assign Dragend Coords to Wx Data */
    marker.on('dragend', (e) => {
        wxFetch(`${e.target._lngLat.lat}`, `${e.target._lngLat.lng}`);
    });

    function initMap(lon, lat) {
        mapboxgl.accessToken = MAP_KEY;
        return new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom: 8,
            center: [lon, lat]
        });
    }

    /* Create Marker */
    function createMarker(lon, lat) {
        return new mapboxgl.Marker()
            .setLngLat([lon, lat])
            .addTo(map);
    }

    /* Create Popup */
    function createPopup(lon, lat) {
        return new mapboxgl.Popup()
            .setLngLat([lon, lat])
            .setHTML("<p>Powered by Coffee and Anxiety.</p>")
    }

    let geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    });
    /* Add the control to the map. */
    map.addControl(
        geocoder
    );

    geocoder.on("result", function (e) {
        marker.setLngLat(e.result.center);
        wxFetch(e.result.center[1], e.result.center[0]);
    });
});


