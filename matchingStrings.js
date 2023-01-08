/*
You can use this regular expression with the String.prototype.match() method to extract all the matching letters from a string. For example:
*/

const string = "This is a string with some letters.";
const matches = string.match(/[a-z]/g);
console.log(matches);  
// Output: ["i", "s", "a", "s", "t", "r", "i", "n", "g", "w", "i", "t", "h", "s", "o", "m", "e", "l", "e", "t", "t", "e", "r", "s"]





//You can also use the RegExp.prototype.test() method to check if a string contains only letters from a to z. For example:

const string1 = "abcdefghijklmnopqrstuvwxyz";
const isValid1 = /^[a-z]+$/.test(string1);
console.log(isValid1);  // Output: true

const string2 = "abcdefghijklmnopqrstuvwxyz123";
const isValid2 = /^[a-z]+$/.test(string2);
console.log(isValid2);  // Output: false





//This pattern will match any single letter from a to z, both lowercase and uppercase. If you want to match only lowercase letters, you can use the following pattern instead:
/[a-z]/g