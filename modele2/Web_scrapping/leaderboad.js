const request = require("request");
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";


let leaderboard = [];
let counter = 0;

request(link, cb);
function cb(error, response, html) {
    if (error) {
        console.log(error);
    }
    else {
        const dom = new JSDOM(html);
        const document = dom.window.document;

        let allScorecardTags = document.querySelectorAll("ds-p-4 ds-border-y ds-border-line")
        /*  let allScorecardTags = document.querySelectorAll('.ds-flex.ds-flex-col.ds-mt-2.ds-mb-2');*/
        //   console.log(allScorecardTags.length);

        for (let i = 0; i < 60; i++) {
            /*   let anchortagAll = allScorecardTags[i].querySelectorAll("ads-text-compact-xs ds-mr-0.5");
               let link = anchortagAll[2].href;*/
            //console.log(link);
            let completlink = "https://www.espncricinfo.com" + link;
            console.log(completlink);
            counter++;
        }
    }
}
function cb2(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmenRow = document.querySelectorAll('ds-w-0 ds-whitespace-nowrap ds-min-w-max ds-flex ds-items-center');
        for (let i = 0; i < batsmenRow.length; i++) {
            let cells = batsmenRow[i].querySelectorAll("tr");//.ds-table-row-compact-bottom.ds-border-none
            console.log(batsmenRow);
            if (cells.length == 8) {
                let name = cells[0].textContent;
                let runs = cells[2].textContent;
                let balls = cells[3].textContent;
                let fours = cells[5].textContent;
                let sixes = cells[6].textContent;
                console.log("Name : ", name, "Runs : ", runs, "Balls : ", balls, "Fours : ", fours, "Sixes : ", sixes);
                processPlayer(name, runs, balls, fours, sixes);
            }
        }
        counter--;
        if (counter == 0) {
            console.log(leaderboard);
            let data = JSON.stringify(leaderboard);
            fs.writeFileSync("BatsmenStats.json", data);
        }
    }
}

function processPlayer(name, runs, balls, fours, sixes) {
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);
    for (let i = 0; i < leaderboard.length; i++) {
        let playerObj = leaderboard[i];
        if (playerObj.Name == name) {
            //will do some work here
            playerObj.Runs += runs;
            playerObj.Innings += 1;
            playerObj.Balls += balls;
            playerObj.Fours += fours;
            playerObj.Sixes += sixes;
            return;
        }
    }
    // code coming here means we did not find our player inside leaderboard
    let obj = {
        Name: name,
        Innings: 1,
        Runs: runs,
        Balls: balls,
        Fours: fours,
        Sixes: sixes
    }
    leaderboard.push(obj);
}

// console.log("Line 80: ",leaderboard);
