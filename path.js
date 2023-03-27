let path = require("path");
console.log(path);
/*let extensionName = path.extname("P:\JS\os.js");
console.log(extensionName);

let basename = path.basename("string.js")
console.log(basename);*/

let dirpath = __dirname;
console.log(dirpath);

console.log(__filename);

let newfilePath = path.join(dirpath, "text.js")
console.log(newfilePath);



