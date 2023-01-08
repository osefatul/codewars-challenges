function makeNegative(num) {
    return num > 0 ? -num : num === 0 ? 0: num 
}

//Solution:
function makeNegative(num) {
    return -Math.abs(num);
}