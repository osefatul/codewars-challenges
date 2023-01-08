
// Question
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.




//Solution 1
const s = "test";
const stringLen = s.length;
const splitStr = s.split("") 
var res;

if( stringLen % 2 !== 0){
    res = (stringLen+1)/2
    //because machine starts from zero
    // console.log(splitStr[res-1])
    return splitStr[res-1]
}

else{
    res = (stringLen)/2;
    // res = [res, res+1]

    //This will be string
    res = `${splitStr.slice(res-1, res+1)}`
    //split the string so it can be converted to array and then join them together.
    const arrRes = res.split(",").join("")
    return arrRes
}




//Solution 2
function getMiddle4(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}



// Solution 3
const getMiddle= (s) =>{
    return s.substr(Math.ceil(s.length/2 -1), // -1 machine language because starts from zero
    s.length%2 === 0 ? 2: 1)
}

console.log(getMiddle2("sfgsdg"))

