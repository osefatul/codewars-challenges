
/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/




// Solution 1
function accum(s) {
    let result = '';

    //string acts as an array when looping through...
    for (let i = 0; i < s.length; i++) {
        // Append the character to the result string the number of times equal to its index,
        // capitalized the first time and lowercased for the rest
        result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + '-';
    }
    // Get all strings but only remove the last dash from the result string
    return result.slice(0, -1);
}



//Solution 2
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}


accum("abcd");  // Output: "A-Bb-Ccc-Dddd"


//Check the slice examples below...
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(0, -1);
// const citrus = fruits.slice(1, -1);
// const citrus = fruits.slice(2, -1);
// const citrus = fruits.slice(0, 3);

console.log(citrus)