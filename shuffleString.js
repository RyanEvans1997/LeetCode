/*
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

Input: s = "abc", indices = [0,1,2]
Output: "abc"
Explanation: After shuffling, each character remains in its position.

Input: s = "aiohn", indices = [3,1,4,2,0]
Output: "nihao"

*/

let restoreString = (s, indices) => {
    let outputString = [...s];
    for(let i = 0; i < s.length; i++) {
        outputString.splice(indices[i], 1, s[i])
    }
    return outputString.join('');
}

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));
