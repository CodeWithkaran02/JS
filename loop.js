// for loop simple the print a number
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//while loop 
let n = 10;
let count;
while (count > 0) {
    console.log(n);
    count--;
}
//WAP in JS to print prime Number
let number = 47;
let IsPrime = true;
for (let i = 2; i <= n; i++) {
    if (number % i == 0) {
        IsPrime = false;
    }
    if (IsPrime == true) {
        console.log("Number is Prime ");
    }
    else {
        console.log("Number us not Prime");
    }
}