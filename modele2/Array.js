//Empty element 
let arr = [];
console.log(arr);

//array with element 
let eleArr = [1, 2, 3, 4, 5, "hello World I am String ", false, 'e', 4.5];
console.log(eleArr);

// check how know is where is my 5 number
console.log("Element at 4th index:" + eleArr[4]);

//Replce the element 
eleArr[3] = "Nothing ";
console.log(eleArr);

//push --> add item in an array at last 
console.log("Array before push:" + eleArr);
console.log("new item");
console.log("Array after push:" + eleArr);

//pop --> remove element from last 
console.log("Array before pop:" + eleArr);
eleArr.pop();
console.log("Arry after pop :" + eleArr);

// shift --> remove the element from the first
///console.log("Array before shift:" + eleArr);
//console.shift()
//console.log(" Array after  shift : " + eleArr)
//unshit 

//length 
let len = eleArr.length();
console.log(len);