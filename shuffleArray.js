/*
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 

Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]

Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]


*/


let shuffle = function(nums, n) {
    let i = 0;
    let output = [];
    while (i <= (nums.length / 2) - 1) {
        output.push(nums[i])
        output.push(nums[i+n])
        i++;
    }
    
    return output;
};


let nums = [1,2,3,4,4,3,2,1]
let n = 4

console.log(shuffle(nums , n))