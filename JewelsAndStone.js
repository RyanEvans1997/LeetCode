/*
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Input: jewels = "z", stones = "ZZ"
Output: 0
*/

let numJewelsInStones = function(jewels, stones) {
    let output = 0;
    console.log(jewels[0])

    for(let i = 0; i < jewels.length ; i++) {
        for (let j = 0; j < stones.length; j++) {
            if (jewels[i] == stones[j]) {
                output++;
            }
        }
    }

    return output;
    
};

let jewels = "aA"
let stones = "aAAbbbb"

console.log(numJewelsInStones(jewels, stones))