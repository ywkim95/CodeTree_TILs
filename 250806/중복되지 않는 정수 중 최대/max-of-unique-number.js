const [n, arr] = require('fs').readFileSync(0).toString().trim().split("\n");
const num = Number(n);
const numArr = arr.split(" ").map(Number);

let maxValue = Number.MIN_SAFE_INTEGER;
let doubleCheck = 0;
for(let i = 0; i < num; ++i) {
    if(numArr[i] === maxValue) {
        doubleCheck = 0;
        maxValue = -1;
        continue;
    }

    if(numArr[i] > maxValue) {
        maxValue = numArr[i];
        doubleCheck = 1;
        continue;
    }

}

console.log(maxValue);