const fs = require('fs');
const strategyList = fs.readFileSync('day4input.txt', 'utf8');
score = 0;
var range1 = [];
var range2 = [];

function isTrue(arr, arr2){
    return arr.some(i => arr2.includes(i));
}
strategyList.split("\n").forEach((line) => {
    var set = line.split(",");
    var section1 = set[0];
    var section2 = set[1];

    var s1v0 = Number(section1.split("-")[0]);
    var s1v1 = Number(section1.split("-")[1]);
    var s2v0 = Number(section2.split("-")[0]);
    var s2v1 = Number(section2.split("-")[1]);
    
    for(i = s1v0; i <= s1v1; i++){
        range1.push(i);
    }
    for(i = s2v0; i <= s2v1; i++){
        range2.push(i);
    }
    
    if(isTrue(range1, range2)){score++;}
    else if(isTrue(range2, range1)){score++;};
    
    range1 = [];
    range2 = [];
});
console.log(score);