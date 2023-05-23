const fs = require("fs");

console.log("Before");

let fikapromise = fs.promises.readFile("promisestxtfile.txt");
console.log(fikapromise);

fikapromise.then(function (data) {
    console.log(data + "");
})
fikapromise.catch(function (error) {
    console.log(error)
})
console.log("After");