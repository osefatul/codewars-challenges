
function reduceFunc (n) {
    return n.reduce((acc, x) => {
        return acc + x
    },0)

}

console.log(reduceFunc([1,2,2,8])) // 1+2+2+8 = 13