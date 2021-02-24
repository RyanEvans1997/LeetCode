/*
Input: encoded = [1,2,3], first = 1
Output: [1,0,2,1]

Input: encoded = [6,2,7,3], first = 4
Output: [4,2,0,7,4]

*/

let decode = function(encoded, first) {
    let output = [];
    output.push(first)

    for(let i = 0; i < encoded.length; i++) {
        output.push(encoded[i] ^ output[i])
    }
    
    return output
};

// console.log(4 ^ 12)
let encoded = [1,2,3]
let first = 4
decode(encoded, first)