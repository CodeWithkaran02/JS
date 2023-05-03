const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link = "https://www.espncricinfo.com/series/indian-premier-league-2023-1345038/gujarat-titans-vs-delhi-capitals-44th-match-1359518/full-scorecard";

request(link, cb);
function cb(error, response, html) {
    if (error) {
        console.log(error);
    }
    else {

        const dom = new JSDOM(html);
        const document = dom.window.document;
        let bowlwesTable = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-auto");
        console.log(bowlwesTable.length);
        /* for (let i = 1; i < bowlwesTable; i++) {
             let rows = bowlwesTable[i].querySelectorAll(" th tr");
             console.log(rows.length);
 
 
         }*/
    }
}