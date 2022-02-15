"use strict";

// console.log(Object.keys(cohort));

(function() {

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        first: "Daniel",
        last: "Zavala"
    };


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return "Hello, " + person.first + " " + person.last + "!";
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {
            name: 'Cameron',
            amount: 180
        },
        {
            name: 'Ryan',
            amount: 250
        },
        {
            name: 'George',
            amount: 320
        }
    ];

    shoppers.forEach(function(shopper) {
        if (shopper.amount <= 200) {
            console.log("Shopper name: " + shopper.name + "," + " Total: $" + shopper.amount + " - " + "You need to spend $" + (200 - shopper.amount) + " more to qualify for a discount!");
        } else {
            console.log("Shopper name: " + shopper.name + "," + " Total: $" + shopper.amount + " - " + "Congratulations! You qualify for a 12% discount! Here is your new total: $" + (shopper.amount - (shopper.amount * .12)));
        }
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: "The Hatchet",
            bookNumber: 0,
            author: {
                firstName: "Gary",
                lastName: "Paulsen"
            }
        },
        {
            title: "Animal Farm",
            author: {
                firstName: "George",
                lastName: "Orwell"
            }
        },
        {
            title: "The Way Of Kings",
            author: {
                firstName: "Brandon",
                lastName: "Sanderson"
            }
        },
        {
            title: "Zero To Hero",
            author: {
                firstName: "Allen",
                lastName: "Lynch"
            }
        },
        {
            title: "Where The Wild Things Are",
            author: {
                firstName: "Maurice",
                lastName: "Sendak"
            }
        }
    ];

    console.log(books[0].title) // "The Salmon of Doubt"
    console.log(books[0].author.firstName) // "Douglas"
    console.log(books[0].author.lastName) // "Adams"
    // console.log(books);
    //console.log(Object.keys(books));

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /*Ry's Bonus Example*/
    function printAllBooks (books) {
        books.forEach(function(book, i) {
            console.log("Book Identification...Scanning Book #" + ++i);

            showBookInfo(book);
        });
    }

    /*My Final Solution*/
    // books.forEach(function(book, i) {
    //     console.log("Book Identification...Scanning Book #" + ++i);
    //     console.log("Title: " + book.title);
    //     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    //     console.log("---");
    // });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    /*Ry's Bonus Example*/
    function createBook(title, authorName) {
        let authorNameSplit = authorName.split(" ");
        return {
            title: title,
            author: {
                firstName: authorNameSplit[0],
                lastName: authorNameSplit[1]
            }
        };
    }

    addBook(createBook("Clean Code", "Bob Martin"))

    function addBook(book) {
        books.push(book);
    }

    console.log(books);

    function showBookInfo(book) {
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    }

    printAllBooks(books);
})();