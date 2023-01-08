
/*
Question:
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D

No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
Example

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note

In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

*/

/*
Solution:
The regular expression /^[:;][-~]?[)D]$/ matches strings that contain a single smiling face. It checks for the following:

^[:;]: A colon or semicolon at the beginning of the string.
[-~]?: An optional nose, which can be a hyphen or a tilde. The "?" after the square brackets means that the nose is optional.
[)D]: A closing parenthesis or capital D at the end of the string.
The ^ and $ symbols at the beginning and end of the regular expression indicate that the pattern should match the entire string.

The filter method of the input array is used to select only those elements that match the regular expression. The length property of the resulting array is then returned, which gives the total number of valid smiling faces.

Here is an example of how the function can be used:
*/
function countSmileys(arr) {
    const smileyRegex = /^[:;][-~]?[)D]$/;
    
    return arr.filter(str => smileyRegex.test(str)).length;
}




console.log(countSmileys([':D',':~)',';~D',':)']));
console.log(countSmileys([":)", ";(", ":D", ":~)", ";~D"]));  // Output: 4
console.log(countSmileys([">:)", ";)", ":}", ":]"])); // Output: 1
console.log(countSmileys([';D', ':-(', ':-)', ';~)'])) // should return 3;