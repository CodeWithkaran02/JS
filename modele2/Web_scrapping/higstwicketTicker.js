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
        let mostWicket = 0;
        let nameofHightWicketTecker = " ";

        let bowlwesTable = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-auto");
        for (let i = 0; i < bowlwesTable.length; i++) {
            let rows = bowlwesTable[i].querySelectorAll("tbody td");


            for (let j = 0; j < rows.length; j++) {
                let tds = row[j].querySelectorAll("td");


                if (tds.length > 1) {
                    let name = tds[0].textContent;
                    let wicket = tds[4].textContent;

                    console.log("Name of the Bowler --> ", name, "Wicket -->", wicket);
                    if (wicket > mostWicket) {
                        mostWicket = wicket;
                        nameofHightWicketTecker = name;
                    }

                }
            }
        }
        console.log("Name of Wicket taker :", nameofHightWicketTecker);
        console.log("Name of the Wicket teker:", mostWicket);
    }



}

