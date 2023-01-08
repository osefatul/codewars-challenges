/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/



//Solution 1:
//we just only shift zeroes that'ts it...
function moveZeros(arr) {
    var resArray = [];
    var zeros = [];
    arr.map(ar => typeof ar === "number" && ar ===0 ? zeros.push(ar): resArray.push(ar))
    return ([...resArray, ...zeros])
}





//Solution 2:
// if we are required to sort our arrays based on [booleans, numbers, strings, zeros] then:
function moveZeros(arr) {
    var letters = [];
    var zeros = [];
    var booleans = [];
    var numbers = [];



    arr.map((ar, i) => {
        if(typeof ar === "string"){
            letters.push(ar)
        }else if(typeof ar === "number" && ar !== 0){
            numbers.push(ar)
        }else if(typeof ar === "boolean"){
            booleans.push(ar)
        }else{
            zeros.push(ar)
        }
    })
    //we don't need sort in the question, otherwise we would use ...booleans.sort(), ...numbers.sort()....
    return([...booleans, ...numbers, ...letters, ...zeros])
}


moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]