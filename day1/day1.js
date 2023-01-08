// https://adventofcode.com/2022/day/1 
const fs = require('fs');
const calorieList = fs.readFileSync('day1input.txt', 'utf8');
const calTotals = [];
cals = 0;
calorieList.split("\n").forEach((line) => {
    if (line === null || line.trim() === '') {
        calTotals.push(cals);
        cals = 0;
    }
    else {
        cals += Number(line);
    }
});
calTotals.sort((a, b) => b-a);
console.log('First Largest: ' + calTotals[0] + ' Second Largest: ' + calTotals[1] + ' Third Largest: ' + calTotals[1]);
console.log('Top 3 Calorie Totals Summed: ' + (calTotals[0] + calTotals[1] + calTotals[2]));