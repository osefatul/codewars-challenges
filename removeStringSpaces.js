function noSpace(x){ return x.replace(/\s/g, "")}

//Solution 2
function noSpace(x){return x.split(' ').join('')}
console.log(noSpace("  asdf asdflk asdf  "))