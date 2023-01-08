/*
In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

    At least one character ("" is not valid)
    Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
    No whitespaces / underscore

*/


function alphanumeric(string){
    return /^[a-zA-Z0-9]+$/.test(string)
}

console.log(alphanumeric("fKXC 5Yb"))
console.log(alphanumeric("vOETqQCk2Z!lnz"))
console.log(alphanumeric("abc123"));  // Output: true
console.log(alphanumeric("ABC123"));  // Output: true
console.log(alphanumeric("Abc123"));  // Output: true
console.log(alphanumeric("abc 123"));  // Output: false (contains whitespace)
console.log(alphanumeric("abc_123"));  // Output: false (contains underscore)
console.log(alphanumeric(""));  // Output: false (empty string)

/*
Regular Expression review:

In a regular expression, the square brackets [] define a character set, which is a set of characters that can be matched.

For example, the character set [a-z] matches any lowercase latin letter. The hyphen - indicates a range of characters, so [a-z] matches any character from a to z, inclusive.

The character set [a-zA-Z0-9] matches any uppercase or lowercase latin letter or digit. The character set [^a-z] matches any character that is not a lowercase latin letter.

The regular expression /^[a-zA-Z0-9]+$/ specifies a pattern that matches any string that consists only of uppercase and lowercase latin letters and digits. The ^ and $ characters anchor the regular expression to the start and end of the string, respectively, ensuring that the string does not contain any characters other than the ones specified in the pattern. The + character indicates that the preceding character (in this case, [a-zA-Z0-9]) can be matched one or more times.

The test method of JavaScript regular expressions is used to test if a string matches the pattern. If the string matches the pattern, the test method returns true, otherwise it returns false.

*/