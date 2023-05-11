const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.cricbuzz.com/live-cricket-scorecard/66365/gt-vs-lsg-51st-match-indian-premier-league-2023";

request(link, cb);
function cb(error, response, html) {
    if (error) {
        console.log("error ", error);

    }
    else {
        const dom = new JSDOM(html);
        const document = dom.window.document;

        let batsman = document.querySelectorAll(".cb-col.cb-col-25 ");
        for (let i = 0; i < batsman.length; i++) {
            let link = batsman[i].href;
            let completlink = "https://www.cricbuzz.com" + link;
            console.log(completlink);

        }

    }
}