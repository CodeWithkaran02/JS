const puppeteer = require("puppeteer");
const mail = "perorinoj.legajabif@jollyfree.com";
const pass = "automation11";
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
    let waitpromise = page.waitForSelector(".home22-intro-text p a");
    return waitpromise;

}).then(function () {
    let checkpromise = page.click(".home22-intro-text p a");
    return checkpromise;
}).then(function () {
    let checkpromiseid = page.waitForSelector('#data-url="/signup"');
    return checkpromiseid;
}).then(function () {
    console.log("crete the account");
    let checkpromisecreate = page.click('button["button button__disabled"]');
    return checkpromisecreate;
    /*.then(function () {
        console.log("crete is work or not ")
        let docclickpromise = page.evaluate(function () {
            let btns = document.querySelectorAll('["button button__disabled"]');
            btns[1].click();
            return docclickpromise;
        })*/

}).then(function () {
    console.log("crete is work or not ")
    let docclickpromise = page.evaluate(function () {
        let btns = document.querySelectorAll("tab-item-link tab-item");
        btns[1].click();
        return;

    }); return docclickpromise;
}).then(function () {
    console.log("crete page open ");
    let waitpromise = page.waitForSelector("tab-1-item-1");
    return waitpromise;
}).then(function () {
    console.log("login page open ")
    let mailtypedpromise = page.type("#input-4", mail, { delay: 100 });
    return mailtypedpromise
}).then(function () {
    console.log("login mail");
    let passwordtypedpromise = page.type("#input-5", pass, { delay: 100 });
    return passwordtypedpromise;
}).then(function () {
    let clickpromise = page.click('button["ui-btn ui-btn-large ui-btn-primary auth-button ui-btn-styled"]');
    return clickpromise;
}).then(function () {
    console.log("login succesful done");
})