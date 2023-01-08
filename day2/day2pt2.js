const fs = require('fs');
const strategyList = fs.readFileSync('day2input.txt', 'utf8');
const scores = new Map([
    ['A', 1],   // Rock
    ['B', 2],   // Paper
    ['C', 3],   // Scissors
    ['X', 'Lose'],
    ['Y', 'Draw'],
    ['Z', 'Win']
]);
score = 0;
strategyList.split("\n").forEach((line) => {
    var opponent = scores.get(line.slice(0,1));
    var me = scores.get(line.slice(2,3));
    if(me == 'Lose'){
        if(opponent == 1) {score += 3};
        if(opponent == 2) {score += 1};
        if(opponent == 3) {score += 2};
    };
    if(me == 'Draw'){
        if(opponent == 1) {score += 4};
        if(opponent == 2) {score += 5};
        if(opponent == 3) {score += 6};
    };
    if(me == 'Win'){
        if(opponent == 1) {score += 8};
        if(opponent == 2) {score += 9};
        if(opponent == 3) {score += 7};
    };
});
console.log(score);

//0 lost
//3 draw
//6 win