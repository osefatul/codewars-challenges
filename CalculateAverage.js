function findAverage(array) {
    if(array.length > 0){
        let total = array.reduce((acc, curr)=> {return acc + curr },0);
        return total/array.length;
    }
    return 0
}

//Solution:
var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}

console.log(findAverage([1,2,3]))