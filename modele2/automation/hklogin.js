const puppeteer = require("puppeteer");
const mail = "perorinoj.legajabif@jollyfree.com";
const pass = "Automation11";
let browserPromise = puppeteer.launch({ headless: false });
let page;
browserPromise.then(function (browser) {
    console.log("Brower is open ");
    let pagepromise = browser.newPage();
    return pagepromise;
}).then(function (pageInstance) {
    console.log("page id open ");
    page = pageInstance;
    let urlpromise = page.goto("https://www.hackerrank.com/auth/signup");
    return urlpromise;
}).then(function () {
    console.log("login page open ")
    let documantpomise = page.evaluate(function () {
        let btns = document.querySelectorAll(".tab-header a ");
        btns[1].click();
        return;

    }); return documantpomise;
}).then(function () {
    console.log("login page done");
    let mailtypedpromise = page.type("#input-4", mail, { delay: 100 });
    return mailtypedpromise
}).then(function () {
    console.log("login mail");
    let passwordtypedpromise = page.type("#input-5", pass, { delay: 100 });
    return passwordtypedpromise;
}).then(function () {
    console.log("user pass ");
    let clickpromise = page.click('button[data-analytics="LoginPassword"]');
    return clickpromise;
}).then(function () {
    console.log(" Login  succesfully");
    let waitpromise = page.waitForSelector('[data-attr1="algorithms"]');
    return waitpromise;

}).then(function () {
    console.log("alogorithm print");
    let clickpromise = page.click('[data-attr1="algorithms"]');
    return clickpromise;
}).then(function () {
    console.log("complt print");
    return page.waitForSelector(".group-label ");
}).then(function () {
    let docSelectorpromise = page.evaluate(function () {
        let allDiv = document.querySelectorAll(".filter-group");
        let div = allDiv[3];
        let divSelector = div.querySelector(".ui-checklist-list-item input");
        divSelector.click();
        return;

    });
    return docSelectorpromise;
}).then(function () {
    console.log("warmup solution");
    //  return page.waitForSelector("challengecard-title");
})