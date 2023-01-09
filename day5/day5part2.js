// Very similar to part 1, except we have to create an temporary stack before transfering crates.
// Using a temporary stack ensures that the crates dont get rearranged.
// Using part 1 code as a starting point...

//                     [Q]     [P] [P]
//                 [G] [V] [S] [Z] [F]
//             [W] [V] [F] [Z] [W] [Q]
//         [V] [T] [N] [J] [W] [B] [W]
//     [Z] [L] [V] [B] [C] [R] [N] [M]
// [C] [W] [R] [H] [H] [P] [T] [M] [B]
// [Q] [Q] [M] [Z] [Z] [N] [G] [G] [J]
// [B] [R] [B] [C] [D] [H] [D] [C] [N]
//  1   2   3   4   5   6   7   8   9 
var stack1 = ['B', 'Q', 'C'];
var stack2 = ['R', 'Q', 'W', 'Z'];
var stack3 = ['B', 'M', 'R', 'L', 'V'];
var stack4 = ['C', 'Z', 'H', 'V', 'T', 'W'];
var stack5 = ['D', 'Z', 'H', 'B', 'N', 'V', 'G'];
var stack6 = ['H', 'N', 'P', 'C', 'J', 'F', 'V', 'Q'];
var stack7 = ['D', 'G', 'T', 'R', 'W', 'Z', 'S'];
var stack8 = ['C', 'G', 'M', 'N', 'B', 'W', 'Z', 'P'];
var stack9 = ['N', 'J', 'B', 'M', 'W', 'Q', 'F', 'P'];




const fs = require('fs');
const operationSequence = fs.readFileSync('day5/day5input.txt', 'utf8');
operationSequence.split("\n").forEach((line) => {
    var instruction = [];
    line.split(" ").forEach((string) => {
        instruction.push(string);
    });
    var move = instruction[1];
    var from = instruction[3];
    var to = instruction[5];

    var tempStack = [];
    for(i = 0; i<move; i++) {
        var popNum = eval('stack'+from).pop();
        tempStack.push(popNum);     // Push to temporary stack
    }
    // Pop from temp stack to destination stack
    for(i=0; i<move; i++) {
        var popNum = tempStack.pop();
        eval('stack'+to).push(popNum);
    }
});
var message = "";
for(i=1; i<=9; i++) {
    var stack = eval('stack'+i);
    message += (stack[stack.length-1]);
}
console.log(message);