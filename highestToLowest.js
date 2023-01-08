
// if we use return max = arr[i] then :
// This code snippet is similar to the one you previously provided, but with one key difference: it contains a return statement before the assignment of max = arr[i].

// In the original code snippet, the assignment to max is done inside the loop and the final result of the function is returned after the loop has completed. In this version, the return statement is inside the loop, which means that the function will immediately return the value of max as soon as arr[i] is greater than max. This means that the loop will only execute once and the function will always return either the maximum or minimum value, depending on which if statement is satisfied.

//so don't use return max = arr[i] if you want to make sure loop through the array.

// first solution
const highestToLowest = (num) => {
    
    var arr = num.split(" ");
    var min = arr[0];
    var max = arr[0];

    for (let i of arr) {
        if(parseInt(arr[i]) > max) {
            max = arr[i];
        }
        if(parseInt(arr[i]) < min) {
            min = arr[i];
        }
    }
    return max + " " + min;
}


//second solution: Number in map turns every element in numbers array to a number. It is same as .map(x => parseInt(x))
const highestToLowest2 = (num) => {
    const arr = num.split(" ").map(Number);
    console.log(arr);
    return Math.max(...arr)+ " " + Math.min(...arr)
}



const result = highestToLowest("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
const result2 = highestToLowest2("8 3 -5 42 -1 0 0 -9 4 7 4 -4")
console.log(result);
console.log(result2);

