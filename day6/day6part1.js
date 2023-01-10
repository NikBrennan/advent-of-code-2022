/*
Read the datasream from the input and find the first occurence of 4 unique characters back-2-back
*/

const fs = require('fs');
const datastream = fs.readFileSync('day6/day6input.txt', 'utf8');
// A queue is used to hold the 4 most recent values
var queue = [];
var markerPos = 0;
datastream.split("").forEach((char) => {
    queue.push(char);
    markerPos++;
    if (queue.length == 4) {
        if(checkForDuplicates(queue) === false) {
            console.log(markerPos);
        };
        queue.shift();
    };
});

// Sets cannot contain duplicate values, so the sizes will be equal if there is no duplicates.
function checkForDuplicates(queue) {
    return new Set(queue).size !== queue.length;
}