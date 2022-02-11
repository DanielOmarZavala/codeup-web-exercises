"use strict";

//(function(){

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ["James", "Jack", "Jeremy", "John"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("There are " + names.length + " elements in the 'names' array.");

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("The name at index " + 0 + " is " + names[0]);
    console.log("The name at index " + 1 + " is " + names[1]);
    console.log("The name at index " + 2 + " is " + names[2]);
    console.log("The name at index " + 3 + " is " + names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i = 0; i < names.length; i++) {
        console.log("Iterating...The name at index " + i + " is " + names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name) {
    console.log("forEach Iterating..." + name);
    })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    let arrayNumbers = [1, 2, 3, 4, 5];

    function first (arrayIn) {
        console.log("Function Return First Element: " + arrayNumbers[0]);
    }

    function second (arrayIn) {
        console.log("Function Return Second Element: " + arrayNumbers[1]);
    }

    function third (arrayIn) {
        console.log("Function Return Last Element: " + arrayNumbers[arrayNumbers.length - 1]);
    }

    first(arrayNumbers);
    second(arrayNumbers);
    third(arrayNumbers);
//})();