
/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

However, the arrays can have varying lengths, not just limited to 4.

*/

//Solution: calculation of binary numbers start from right to left..

const binaryArrayToNumber = arr => {
    let result = 0;
    arr.reverse().map((num, index)=>{
        if(num !== 0){
            result += Math.pow(2, index)
        }
    })

    return result;
};
console.log(binaryArrayToNumber([1,0,0,1]))



//Solution 2:
const binaryArrayToNumber2 = arr => parseInt(arr.join(""));
console.log(binaryArrayToNumber2([1,0,0,1]))

/*
In the expression parseInt(arr.join(''), 2), join("") method join up array elements in a string which means [1,0,0,1] would convert to '1001'. parseInt then convert that string to number but on binary representation.

*/