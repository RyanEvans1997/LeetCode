/*

Input: nums = [1,2,3,1,1,3]
Output: 4

Input: nums = [1,1,1,1]
Output: 6

Input: nums = [1,2,3]
Output: 0

*/


let numIdenticalPairs = function(nums) {
    let goodPairs = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) {
                goodPairs++;
            }
        }
    }
    return goodPairs;
};

let nums = [1,1,1,1]
console.log(numIdenticalPairs(nums))