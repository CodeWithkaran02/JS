let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newarr = arr.map(cb);
console.log(newarr);
function cb(x) {
    return 5 * x;

}
console.log(arr);