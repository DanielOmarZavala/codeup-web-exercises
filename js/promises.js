"use strict"

/* Main Fetch Function */
function getUserLastPushEvent(username) {

let url = `https://api.github.com/users/${username}/events/public`;
// let url = `https://api.github.com/repos/danielomarzavala/codeup-web-exercises/commits`;

return fetch(url, {headers: {'Authorization': GIT_KEY}})
    .then(response => response.json())
    .then(response => coolFunc(response))
    .catch(err => console.error(err));
}


/* Invoke Fetch Function and Populate on DOM */
getUserLastPushEvent('mojombo').then(event => {
    $('body').html('<h1>' + 'Mojombos last push event was created at' +  event.created_at + '</h1>')
});

//TODO:
/* Filter to last commit, not to last push */

/* Filter to Push Event */
function coolFunc (response) {
    for (let event of response) {
        if (event.type === 'PushEvent')
            return event;
    }
}