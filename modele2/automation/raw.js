const puppeteer = require("puppeteer");

let browerepromise = puppeteer.launch({ headless: false })

browerepromise.then(function (browerInstance) {
    console.log("Browers is opends ")
})