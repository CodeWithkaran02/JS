const puppeteer = require("puppeteer");
const mail = "perorinoj.legajabif@jollyfree.com";
const pass = "Automation11";
const code = require("./code");

(async function () {
    let browser = await puppeteer.launch({ headless: false }, { daily: 100 });

})