/* 
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a million digits), converting to int will not work.

*/

function sumStrings(a, b) {
    let result = '';
    let carry = 0;
    let i = a.length - 1; //last digit
    let j = b.length - 1; //last digit
    console.log(i, j)

    while (i >= 0 || j >= 0 || carry > 0) {
        const x = i >= 0 ? a[i--] - '0' : 0;
        const y = j >= 0 ? b[j--] - '0' : 0;

        console.log(x, y)

        const sum = x + y + carry;
        result = (sum % 10) + result;
        
        carry = Math.floor(sum / 10);
    }
    return result.replace(/^0+/, ''); // if it starts with zero then replace it with nothing
}
console.log(sumStrings('42','35'))

/*
The expression a[i--] retrieves the element at the index i, and then decrements i by 1. For example, if a = [1, 2, 3] and i = 2, then the expression a[i--] would evaluate to 3, and i would be decremented to 1.

The sum variable represents the sum of the x, y, and carry variables. The result variable is prepended with the least significant digit of the sum
*/

a = "";
b=55;
c=895;

console.log(a + b +c)