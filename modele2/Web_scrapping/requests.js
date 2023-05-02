const request = require('request');

request("https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard", cb);

function cb(error, response, body) {
    if (error)
        console.error('error:', error); // Print the error if one occurred
    else {
        console.log('body:', body); // Print the HTML for the Google homepage.
    }
}   