//Make a folder inside same dirextory of this and in that folder make a txt file with content
// new file has been made 

let fs = require("fs");
let path = require("path");

if (!fs.existsSync("new folder"));
fs.mkdirSync("new folder");

let filekapath = path.join(__dirname, "new folder", "new file.txt");
fs.writeFileSync(filekapath, "new file has been made ");