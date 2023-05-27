const puppeteer = require("puppeteer");
let browserPromise = puppeteer.launch({ headless: false });
let page;
browserPromise.then(function (browser) {
    console.log("Browser is open");
    let pagepromise = browser.newPage();
    return pagepromise;

}).then(function (pageInstance) {
    console.log("page is open ")
    page = pageInstance;

    let urlpromise = page.goto("https://www.hackerrank.com/");
    return urlpromise;
}).then(function () {
    console.log("HackerRank page is open ")
    let waitpromise = page.waitpromise(".home22-intro-text p a");
    return waitpromise;

}).then(function () {
    let checkpromise = page.click(".home22-intro-text p a");
    return checkpromise;
})