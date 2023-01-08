function oddOrEven(array) {
    let i = array.reduce((acc, cur)=> acc + cur ,0)
    return i%2===0?"even":"odd"
}

//Solution2
function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}

console.log(oddOrEven([0,1,2]));
console.log(oddOrEven([0,-2,-2]));
