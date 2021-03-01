/*
Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15

Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21


*/


let subtractProductAndSum = (n) => {
    nToString = n.toString();
    let product = parseInt(nToString[0]);
    let sum = parseInt(nToString[0]);
    for(let i = 1; i < n.toString().length; i++) {
        product *= parseInt(nToString[i]);
        sum += parseInt(nToString[i]);
    }
    let result = product - sum;
    return result;
}

console.log(subtractProductAndSum(234));