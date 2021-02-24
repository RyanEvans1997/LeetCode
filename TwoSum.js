let twoSum = function(nums, target) {
    let outputArray = [];

    let hashMap = {};
    for(let i = 0; i < nums.length; i++) {
        hashMap[i] = nums[i];
    }

    for (const index in hashMap) {
        getFirstValue = hashMap[index];
        getFirstIndex = Object.values(hashMap).indexOf(getFirstValue);
        // console.log(`${getFirstIndex} : ${getFirstValue}`);

        requiredValueForTarget = target - getFirstValue;
        hashMap[getFirstIndex] = 'PREVENT DUPLICATION'

        if (Object.values(hashMap).includes(requiredValueForTarget)) {
            getSecondIndex = Object.values(hashMap).indexOf(requiredValueForTarget);
            getSecondValue = getSecondIndex;
            outputArray.push(getFirstIndex);
            outputArray.push(getSecondValue);
            return outputArray;
        }
    }
};

let nums = [3, 2, 4];
let target = 6;

console.log(twoSum(nums, target));