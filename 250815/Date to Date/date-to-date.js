const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.

const date = [0, 31,28,31,30,31,30,31,31,30,31,30,31];
let month = m1;
let day = d1;

let diff = 1;

while(true) {
    if(month === m2 && day === d2) {
        break;
    }
    diff++;
    day++;

    if(day > date[month]) {
        day = 1;
        month++;
    }
}

console.log(diff)