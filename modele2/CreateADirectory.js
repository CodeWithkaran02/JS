let fs = require("fs");
console.log(fs);

//fs.mkdirSync("hamariDireectory");

// Crate a Directory

//if (!fs.existsSync("hamariDireectory"));
//fs.mkdirSync("hamariDireectory")

// Read a Directory

let floderPath = __dirname;
let contentoffolder = fs.readdirSync("P:\JS\intro node");
comsole.log(floderPath);

// Delelt a directory 

//fs.rmdirSync("hamariDireectory");

//Copy file

let sourcePath = path.join(__dirname, file.txt);
let destinationPath = path.join(__dirname, "intro node", "file.txt");
console.log(sourcePath);
console.log(destinationPath);

fs.copyFileSync(sourcePath, destinationPath);