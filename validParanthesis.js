function validParentheses(parens) {

    const stack = [];
    for (const ch of parens) {
        if (ch === '(') {
        stack.push(ch);
        } else if (ch === ')') {
            if (stack.length === 0)return false 
            stack.pop();
        }
    }
    return stack.length === 0;
}



//Solution 2:
function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
        if (parens[i] == '(') n++;
        if (parens[i] == ')') n--;
        if (n < 0) return false;
    }
    return n == 0;
}

console.log(validParentheses("()"));              // Output: true
console.log(validParentheses(")(()))"));          // Output: false
console.log(validParentheses("("));               // Output: false
console.log(validParentheses("(())((()())())"));  // Output: true