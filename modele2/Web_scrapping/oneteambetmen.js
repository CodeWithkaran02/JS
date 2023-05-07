const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/sunrisers-hyderabad-vs-chennai-super-kings-44th-match-1254091/full-scorecard";

request(link, cb);
function cb(error, response, html) {
    if (error) {
        console.log("error ", error);

    }
    else {
        const dom = new JSDOM(html);
        const document = dom.window.document;

        let batsman = document.querySelectorAll('.ds-table-row-compact-bottom.ds-border-none');
        console.log(batsman.length);
    }
}