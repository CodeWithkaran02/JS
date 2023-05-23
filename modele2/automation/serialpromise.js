let fs = require("fs");

let fikapromise = fs.promises.readFile("promisestxtfile.txt");
fikapromise.then(function (data) {
    console.log(data + "");
    let f2kapromises = fs.promises.readFile("f2.txt");
    return f2kapromises;
}).then(function (data) {
    console.log(funtion(error)); {
        console.log(error);
    }
}
)