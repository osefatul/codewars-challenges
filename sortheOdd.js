/*
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/

function sortArray(array) {
    const oddNumbers = array.filter(num => num % 2 === 1).sort((a, b) => a - b);
    return array.map(num => num % 2 === 1 ? oddNumbers.shift() : num);
}

//Note:the above solution works perfectly with only positive integers.. but that is not the best solution..

function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}


//Solution2
function sortArray(array) {
    var odds = [];
    //loop, if it's odd, push to odds array
    for (var i = 0; i < array.length; ++i) {
        if (array[i]%2 !== 0) {
        odds.push(array[i]);
        }
    }
    //sort odds from smallest to largest
    odds.sort(function(a,b){
        return a-b;
    });

    //loop through array, replace any odd values with sorted odd values
    for (var j = 0; j < array.length; ++j) {
        if (array[j]%2 !== 0) {
        array[j] = odds.shift();
        }
    }
    return array;
}

console.log(sortArray([ -30, -41, -34, -24, 2, -19, 14, 14, -38, 8, -17, -20, -11, -32, 38, -32, -1, 2, 5, -2, 7, 11, 23, -50, -10, 39, 45 ]))