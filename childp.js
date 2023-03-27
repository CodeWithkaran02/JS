let cp = require("child_process")
let content = cp.execSync("node intro.js");
console.log("Output of the file :" + content);
console.log(cp);

// buffer 
/*let content = cp.execSync("node intro.js");
console.log(content);
console.log(cp);*/



