const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

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

        let bowlwesTable = document.querySelectorAll(".table.bowler");
        for (let i = 1; i < bowlwesTable.length; i++) {
            //let rows = bowlwesTable[i].querySelectorAll("tbody.tr");


            for (let j = 0; j < rows; j++) {
                let tds = row[j].querySelectorAll("td");


                if (tds.length > 1) {
                    let name = tds[0].textContent;
                    let wicket = tds[4].textContent;

                    //  console.log("Name of the Bowler --> ", name, "Wicket -->", wicket);
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
