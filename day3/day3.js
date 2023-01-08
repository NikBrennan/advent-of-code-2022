// https://adventofcode.com/2022/day/3
const fs = require('fs');
const rucksacks = fs.readFileSync('day3input.txt', 'utf8');

var badgePrioSum = 0;
var rucksackArray = [];
rucksacks.split('\n').forEach((line) => {
    rucksackArray.push(line);
});
for(let i = 0; i < rucksackArray.length; i+=3) {
    const sack1 = rucksackArray[i].split('');
    const sack2 = rucksackArray[i+1].split('');
    const sack3 = rucksackArray[i+2].split('');

    for(const item of sack1) {
        if(sack2.includes(item) && sack3.includes(item)){
            if(item == item.toUpperCase()) {            // Check if char is uppercase
                console.log('Badge: ' + item + ' Prio: ' + (item.charCodeAt(0)-38));
                badgePrioSum += (item.charCodeAt(0) - 38)
            }
            if(item == item.toLowerCase()) {            // Check if char is lowercase
                console.log('Badge: ' + item + ' Prio: ' + (item.charCodeAt(0)-96));
                badgePrioSum += (item.charCodeAt(0) - 96)
            };
            break;
        }
    }
}
console.log(badgePrioSum);