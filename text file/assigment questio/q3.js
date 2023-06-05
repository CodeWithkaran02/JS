// copy index html file from modele to a folder inside modele2 having name html

let fs = require("fs");
let path = require("path");

let secPath = path.join(__dirname, "..", "..", "..", "module1", "index.html");
console.log(secPath)

let destPath = path.join(__dirname, "..", "..", "module2", "index.html");
console.log(destPath);

fs.copyFileSync(secPath, destPath);
