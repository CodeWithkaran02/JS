const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link = "https://github.com/topics";

request(link, cb)

function cb(error, response, html) {
    if (error) {
        console.log(error);
    }
    else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allAnchor = document.querySelectorAll(".no-underline.d-flex.flex-column.flex-justify-center");
        for (let i = 0; i < allAnchor.length; i++) {
            let link = allAnchor[i].href;
            let completlink = "https://github.com/topics" + link;
            console.log(completlink);
        }
    }
}

