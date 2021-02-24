/* 
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
    
*/
let defangIPaddr = function(address) {
    return address.replace(/\./ig, '[.]');
};

let address = "1.1.1.1"

console.log(defangIPaddr(address))