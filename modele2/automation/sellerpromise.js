let fs = require("fs");
let arr = ["./f1.txt", "./f2.txt", "./f3.txt", "./f4.txt", "/f5.txt"];
let filepromise = fs.promises.readFile(arr[0]);

for (let i = 1; i < arr.length; i++) {
    filepromise = filepromise.then(function (data) {
        console.log(data + "");
        let newFilepromise = fs.promises.readFile(arr[i]);
        return newFilepromise;
    })
}

filepromise.then(function (data) {
    console.log(data + "");
})