//Read content of unorgantal folder and make an array which has extension name of each file.

let fs = require("fs");
let path = require("path");

let folderkaPath = path.join(__dirname, "unorgantal");

//console.log(folderkaPath);

let content = fs.readdirSync(folderkaPath);

//console.log(content);
let extArr = [];
for (let i = 0; i < content.length; i++) {
    let name = content[i];
    let extname = path.extname(name);
    extArr.push(extArr);
}
console.log(content);