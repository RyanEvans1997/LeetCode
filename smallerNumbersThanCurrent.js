/*
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]

Explanation: 
For nums[0]=8 there exists four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist as there are no smaller numbers than it.
For nums[2]=2 there exists one smaller number than it (1). 
For nums[3]=2 there exists one smaller number than it (1). 
For nums[4]=3 there exists three smaller numbers than it (1, 2 and 2).

Input: nums = [6,5,4,8]
Output: [2,1,0,3]

Input: nums = [7,7,7,7]
Output: [0,0,0,0]
*/

let smallerNumbersThanCurrent = function(nums) {
    // e.g. compare 40 and 100. 
    // calcs 40-100 which is -60 (negative)
    // sort function sorts 40 as value lower than 100
    const sortNums = (nums) => {
        return nums.sort((a, b) => a-b);
    }

    let sortedArray = [...nums];
    console.log(sortNums(sortedArray));

    for(let i = 0; i < nums.length; i++) {
        // example arr: 10, 2, 4, 5, 8
        // sorted arr : 2, 4, 5, 8, 10
        // replaces 1 elements at index i (i = 0)
        // with where 10 is in sortedArray
        // as 10 is at the end of the array, put element as 4

        nums.splice(i, 1, sortedArray.indexOf(nums[i]))
    }

    return(nums);
}

let nums = [10,2,4,5,8];
console.log(smallerNumbersThanCurrent(nums))

