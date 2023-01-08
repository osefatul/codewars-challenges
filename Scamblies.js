/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:
    Only lower case letters will be used (a-z). No punctuation or digits will be included.
    Performance needs to be considered.

Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

*/

function scramble(str1, str2) {
    const charCounts = {};
    for (const ch of str1) {
        charCounts[ch] = (charCounts[ch] || 0) + 1;
    }

    for (const ch of str2) {
        if (!charCounts[ch]) return false;
        charCounts[ch]--;
    }
    return true;
}

console.log(scramble('rkqodlw', 'world'))
console.log(scramble('cedewaraaossoqqyt', 'codewars'))





/*
Solution 2:
In this code, the callback function (character) => --occurrences[character] >= 0 is called for each character in the str2 string. The callback function decrements the count for the character in the occurrences object and checks if the count is greater than or equal to 0. If it is, it means that the character can be found in the occurrences object, and the callback function returns true.
*/

function scramble(str1, str2) {
    let occurrences = str1.split("").reduce((arr, cur) => 
    { 
        arr[cur] ? arr[cur]++ : arr[cur] = 1 
        return arr; 
    }, {});

    console.log(occurrences)
    //decrement and then check..
    return str2.split("").every((character) => --occurrences[character] >= 0);
}

console.log(scramble('rkqodlw', 'world'))