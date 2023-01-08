class RomanNumerals {
    static toRoman(num) {
        if (num < 1 || num >= 4000) {
        throw new Error('Invalid input');
        }
        const lookup = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
        };
        let result = '';
        for (const key of Object.keys(lookup).reverse()) {
        while (num >= key) {
            result += lookup[key];
            num -= key;
        }
        }
        return result;
    }

    static fromRoman(str) {
        const lookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
        };
        let result = 0;
        for (const key of Object.keys(lookup)) {
        while (str.startsWith(key)) {
            result += lookup[key];
            str = str.substring(key.length);
        }
        }
        if (str.length > 0) {
        throw new Error('Invalid input');
        }
        return result;
    }
}