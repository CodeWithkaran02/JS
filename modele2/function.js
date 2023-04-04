//empty funstio
function sayHello() {
    console.log("Hello from funstion");

}
sayHello();

//funstion with paramiter
function sum(num1, num2) {
    let addition = num1 + num2;

    console.log(addition);
}

sum(3, 5);

//funtiom with return type
function multiples(num1, num2) {
    return num1 * num2;
}
let ans = multiples(3, 5);
console.log(ans);

//funtion are the first citizen is JS
let a = function sub(num1, num2) {
    return num1 - num2;
}
console.log(10, 5);

//IIFE -> immediately Invoked function Expression
(function (num1, num2) {
    console.log(num1 / num2);
})();

//IIFE with the parameter
(function (num1, num2) {
    console.log(num1 / num2);
})(10, 2) 