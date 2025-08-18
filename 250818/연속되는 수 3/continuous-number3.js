const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.
let cnt = 0;
let max = 1;

for(let i = 0; i < arr.length; ++i) {
    
    if(i === 0) {
        cnt++;
        continue;
    } 
    let isPositive = arr[i] > 0;
    let prevPositive = arr[i-1] > 0;
    if(isPositive === prevPositive) {
        cnt++;
    }else {
        cnt = 1;
    }

    max = max >= cnt ? max : cnt;
}

console.log(max);