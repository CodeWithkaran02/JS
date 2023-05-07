const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/indian-premier-league-2023-1345038/gujarat-titans-vs-delhi-capitals-44th-match-1359518/full-scorecard";

request(link, cb);

function cb(error, response, html) {
    if (error) {
        console.log(erroe);

    }
    else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsman = document.querySelectorAll("ds-w-0 ds-whitespace-nowrap ds-min-w-max ds-flex ds-items-center");
        //  console.log(batsman);
        for (let i = 0; i < batsman; i++) {
            let batmanLink = batsman[a].querySelectorAll("td");
            let anchoretag = batmanLink[1].href;
            let completeBatsmanLink = "https://www.espncricinfo.com" + batsmanLink;
            console.log(completeBatsmanLink);
            //request(completeBatsmanLink, cb2)
        }
    }
}

/*function cb2(error, response, html) {
    if (error) {
        console.log(error);

    }
    else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let playerDetail = document.querySelectorAll(".player-card-padding .player_overview-grid");
        console.log(playerDetail);
        //  let playerH5 = playerDetail.querySelectorAll("div h5");
        //  let fullname = playerH5[0].textContent;
        //let DOB = playerh5[1].textContent;
        //  console.log("fullname:", fullname, "date of Brith :", DOB);
    }
}*/