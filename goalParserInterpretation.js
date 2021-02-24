/*
Input: command = "G()(al)"
Output: "Goal"

G -> G
() -> o
(al) -> al

Input: command = "G()()()()(al)"
Output: "Gooooal"

Input: command = "(al)G(al)()()G"
Output: "alGalooG"


*/

let interpret = function(command) {
    let output = '';
    let i = 0;
    while(i < command.length) {
        if (command[i] === 'G') {
            output += 'G';
            i++;
            // console.log(`1: ${i}`)
        } else if (command[i] === '(' && command[i+1] === ')') {
            output += 'o';
            i+=2;
            // console.log(`2: ${i}`)
        } else if (command[i] === '(' && command[i+1] === 'a') {
            output += 'al';
            i+=4;
            // console.log(`3: ${i}`)
        }
    }
    // console.log('finished running')

    return output;
};

let input = "G()()()()(al)";
console.log(interpret(input));
