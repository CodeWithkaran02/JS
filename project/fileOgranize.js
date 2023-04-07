//console.log("helllo world");
/*let inputArr = process.argv;
console.log(inputArr);

let input = inputArr[2];
console.log(input);*/

let fs = require("fs");

let path = require("path");

let folderpath = process.argv[2];

let folderExists = fs.existsSync(folderpath);
let extensions = {
    Audio: [".mp3"],
    Vedio: [".mp4"],
    Document: [".doc", ".xlsx", ".pdf", ".txt"],
    Image: [".jpeg", ".jpg", ".png", ".jpg"],
    Software: [".apk"]
};
if (folderExists) {
    let files = fs.readdirSync(folderpath);
    for (let i = 0; i < files.length; i++) {
        let ext = path.extname(files[i])
        let nameoffolder = givenfoldername(ext);

        console.log("Ext--", ext, "folder--", nameoffolder)
    }
}
else {
    console.log("plese Enter a vaild path");

}

function givenfoldername(ext) {
    for (let key in extension) {
        let extArr = extensions[key];
        for (let i = 0; i < extArr.length; i++) {
            if (extArr[i] == ext) {
                return key;

            }
        }
    }
    return 'other';
}


