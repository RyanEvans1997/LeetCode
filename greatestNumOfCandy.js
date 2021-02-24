/*
Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]

*/

let kidsWithCandies = function(candies, extraCandies) {
    let output = [];
    let greatestNum = Math.max(...candies);

    for(let i = 0; i < candies.length; i++) {
        output.push(candies[i] + extraCandies >= greatestNum) 
    }

    return output;
};

let candies = [12,1,12]
let extraCandies = 10

console.log(kidsWithCandies(candies, extraCandies))