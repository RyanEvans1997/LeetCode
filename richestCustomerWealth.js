/*
Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10

*/


let maximumWealth = function(accounts) {
    let maxSum = 0;

    for(let i = 0; i < accounts.length; i++) {
        let sum = 0;
        for(let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j]
            if (sum > maxSum) {
                maxSum = sum;
            }
            // console.log(`i: ${i} - j: ${j}`)
            // console.log(`sum: ${sum}`)
        }
    }

    return maxSum;
};

let accounts = [[1,5],[7,3],[3,5]]

console.log(maximumWealth(accounts))