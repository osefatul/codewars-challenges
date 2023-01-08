/*
Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'

Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

*/

function solution(number){
    const romanSymbols = {
        1: 'I',
        4: "IV",
        5: 'V',
        9: "IX",
        10: 'X',
        40: "XL",
        50: 'L',
        90: "XC",
        100: 'C',
        400:"CD",
        500: 'D',
        900: "CM",
        1000: 'M'
    };

    let romanNumeral = "";
    let remainingNumber = number;
    
    for (let [value, symbol] of Object.entries(romanSymbols).reverse()){
        const quotient = Math.floor(remainingNumber/value)
        if(quotient === 0) continue; //go for next iterator..
        romanNumeral += symbol.repeat(quotient);
        remainingNumber %= value;
    }
    return romanNumeral;
}

console.log(solution(1990));


//Solution2:

function solution(number){
    var result   = '',
        decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    decimals.map(function (value, index) {

    while (number >= value) {
        result += roman[index];
        number -= value;
    }
    });

    return result;
}


console.log(solution(1990));