let runningSum = function(nums) {
    let output = [];
    let sum = 0;

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        output.push(sum);
    }

    return output;
    
};

let input = [3,1,2,10,1]

runningSum(input);