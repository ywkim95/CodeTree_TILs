const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

// Please Write your code here.

const dayOfMonth = [0,31,29,31,30,31,30,31,31,30,31,30,31];
const date = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let diff = 1;
let month = m1, day = d1;
let count = 0;
while(true) {
    if(A === date[diff%7]) {
        count++;
    }
    if(month === m2 && day === d2) {
        break;
    }
    diff++;
    day++;
    if(day > dayOfMonth[month]) {
        day = 1;
        month++;
    }
}

console.log(count);