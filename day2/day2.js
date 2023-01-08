// https://adventofcode.com/2022/day/2
const fs = require('fs');
const strategyList = fs.readFileSync('day2input.txt', 'utf8');
const scores = new Map([
    ['A', 1],   // Rock
    ['B', 2],   // Paper
    ['C', 3],   // Scissors
    ['X', 1],
    ['Y', 2],
    ['Z', 3]
]);
score = 0;
strategyList.split("\n").forEach((line) => {
    var opponent = scores.get(line.slice(0,1));
    var me = scores.get(line.slice(2,3));
    if(me==1 && opponent==3) {score += 6};    // Win Rock beats Scissors
    if(me==2 && opponent==1) {score += 6};    // Win Paper beats Rock
    if(me==3 && opponent==2) {score += 6};    // Win Scissors beats Paper
    if(me==opponent) {score += 3};    // Draw
    score += me;
});
console.log(score);

//0 lost
//3 draw
//6 win