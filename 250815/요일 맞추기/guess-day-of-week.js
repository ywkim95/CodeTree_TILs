const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
// Please Write your code here.

const dayOfMonth = [0,31,28,31,30,31,30,31,31,30,31,30,31];
const date = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let month = m1;
let day = d1;

let diff = 1;
while(true) {
    if(month === m2 && day > d2) {
        diff = day - d2;
        break;
    }
    if(month > m2) {
        let difDay = day - d2;
        for(let i = m2; i < month - m2; i++) {
            difDay += dayOfMonth[i];
        }

        diff = difDay;
        break;
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

if((month === m2 && day > d2) || month > m2) {
    console.log(date[(diff-1)%7])
} else {
    console.log(date[diff%7]);
}