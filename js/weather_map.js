"use strict"

$(document).ready(function(){
    //create box-one empty block element after search-container
    $('#search-container').after("<section id='box-one'></section> ");

    // let lat = $('#search-btn').click(function (){
    //     ;
    // });

    let lat = 29.5696;
    let lon = 98.7068;

    fetch("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + lat + "&lon=" + lon + "&appid=" + OWM_KEY)
        .then(response => response.json())
        .then(response => getSanitizedResponse(response))
        .then(sanres => mapArr(sanres))
        .catch(err => console.error(err));

    function getSanitizedResponse(dataBody) {
        return dataBody.main;
    }

    function mapArr (wxObjArrIn){
        console.log(wxObjArrIn);


    }
});