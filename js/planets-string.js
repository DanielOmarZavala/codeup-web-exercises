(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");

    console.log(planetsArray);
    console.log(planetsString);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    let planetsNewString = planetsArray.join("<br>");

    console.log(planetsNewString);

    /*BONUS*/
    // function buildPlanetUl(arrOfPlanets) {
    //     let newString = "<ul>";
    //     for (let i = 0; i < arrOfPlanets.length; i++) {
    //         newString += "<il>";
    //         newString += arrOfPlanets(i);
    //         newString += "</li>";
    //     }
    //     return newString;
    // }
    //
    // console.log(buildPlanetUl(planetsArray));

})();