const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/indian-premier-league-2023-1345038/gujarat-titans-vs-delhi-capitals-44th-match-1359518/full-scorecard";

request(link, cb);

function cb(error, response, html) {
    if (error)
        console.error('error:', error); // Print the error if one occurred
    else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let teamsName = document.querySelectorAll(".ci-team-score.ds-flex.ds-justify-between.ds-items-center.ds-text-typo.ds-mb-2");
        console.log(teamsName[0].textContent);
        console.log(teamsName[1].textContent);
    }
}
