let fs = require("fs");
console.log(fs);

//-> CRUD Opration in Js 
//Crete the C opration

let path = require("path");
let filepath = path.join(__dirname, "file.txt");
console.log(filepath);

//fs.writeFileSync(filepath, "Hello I am a text file");

//overide -> crete file if not exit 
fs.writeFileSync(filepath, "Again writing on exisitng file");

//-> R -> read option 

let content = fs.readFileSync(filepath, 'utf-8');
console.log(content);

// -> U -> update 

console.log("Before update ")
console.log(content);

fs.appendFileSync(filepath, " \n Newly added Content");
console.log("After update");
console.log(fs.readFileSync(filepath, 'utf-8'));

//D -> delete

fs.unlinkSync(filepath);
