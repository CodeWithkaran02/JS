const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM('<!Doctype <html><p>Hello World <p>');
console.log(don.window.document.querySelector("p").textContent);

