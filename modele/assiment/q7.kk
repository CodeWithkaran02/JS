Title: 
Decimal To Binary 

Meta-Tags:
Javascript, JS, interview, questions, interview questions, primitive,functions,practice,medium 

Description:
Write a function 'decToBin' which takes a decimal number and returns its binary.

Constraints:
Nil

Sample Input:
45

Sample Output:
101101

Test Cases:
    Input#1:
    86

    Output#1:
    1010110


    Input#2:
    3672

    Output#2:
    111001011000



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