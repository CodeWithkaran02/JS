
// Test Cases:
//     Input#1:
//     86

//     Output#1:
//     1010110


//     Input#2:
//     3672

//     Output#2:
//     111001011000



Solution:
function ConvertToBinary(dec) {
    var bits = [];
    var dividend = dec;
    var remainder = 0;
    while (dividend >= 2) {
        remainder = dividend % 2;
        bits.push(remainder);
        dividend = (dividend - remainder) / 2;
    }
    bits.push(dividend);
    bits.reverse();
    return bits.join("");
}