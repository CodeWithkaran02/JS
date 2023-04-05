//Read content of unorgantal folder and make an array which has extension name of each file.

let fs = require("fs");
let path = require("path");

let folderkaPath = path.join(__dirname, "..", " unorgantal");

console.log(folderkaPath);

let content = fs.readdirSync(folderkaPath);

console.log(content);