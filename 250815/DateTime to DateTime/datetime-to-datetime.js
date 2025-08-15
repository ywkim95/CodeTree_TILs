const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.

let day = 11;
let hour = 11;
let minute = 11;

let diff = 0;

while(true) {
    if(A === day && B === hour && C < minute) {
        diff = -1;
        break;
    }
    if(A === day && B < hour) {
        diff = -1;
        break;
    }
    if(A < day) {
        diff = -1;
        break;
    }

    if(day === A && hour === B && minute === C) {
        break;
    }

    diff++;
    minute++;
    if(minute === 60) {
        hour++;
        minute = 0;
    }

    if(hour === 24) {
        hour = 0;
        day++;
    }
}

console.log(diff);