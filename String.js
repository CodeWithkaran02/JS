//simple string 
let str = "I am a String ";
console.log(str);

// lenght of string 
let len = str.length
console.log(len);

// slice method -> extract part of a String 
let sliceArr = str.slice(2, 8);
console.log(sliceArr);

// replace method -> replace a part with given word 
let replacestr = str.replace("am", "was");
console.log(replacestr);

//to upper
let uppercase = str.toUpperCase();
console.log(uppercase);

//to lower
let lowercase = str.toLowerCase();
console.log(lowercase);

//concate
let firstname = "karuna ";
let lastname = "karan";
let fullname = firstname.concat(lastname);
console.log(fullname);

//splitted -> return array 

let splitted = str.split("");
console.log(splitted);