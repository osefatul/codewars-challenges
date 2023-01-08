/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

*/

//Solution1:
function getSum( a,b ){
    let result = 0;

    if (a <= b){
        for (var i=a; i<= b ; i++){
            result += i;
        }
    }else
    {
        for (var i=b; i<= a ; i++){
            result += i;
        }
    }
    return result;
}


//Solution2:
/*
Using Gaussian summation:https://letstalkscience.ca/educational-resources/backgrounders/gauss-summation
*/
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}
console.log(getSum(1,0))