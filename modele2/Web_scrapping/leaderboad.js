const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/indian-premier-league-2023-1345038/punjab-kings-vs-lucknow-super-giants-38th-match-1359512/live-cricket-score";

request(link, cb);
function cb(error, response, html) {
    if (error) {
        console.log(error);
    }
    else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allScorecardTags = document.querySelectorAll('a[data-hover="Scorecard"]');

        for (let i = 0; i < allScorecardTags.length; i++) {
            let link = allScorecardTags[i].href;
            console.log(link);
            let completlink = "https://www.espncricinfo.com" + link;
            console.log(completlink);
        }
    }
}
function cb2(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmenRow = document.querySelectorAll('tbody [class="ds-border-b ds-border-line ds-text-tight-s"]');
        for (let i = 0; i < batsmenRow.length; i++) {
            let cells = batsmenRow[i].querySelectorAll("td");
            if (cells.length == 8) {
                let name = cells[0].textContent;
                let runs = cells[2].textContent;
                let balls = cells[3].textContent;
                let fours = cells[5].textContent;
                let sixes = cells[6].textContent;
                // console.log("Name : ",name,"Runs : ",runs,"Balls : ",balls,"Fours : ",fours,"Sixes : ",sixes);
                processPlayer(name, runs, balls, fours, sixes);
            }
        }
    }
}