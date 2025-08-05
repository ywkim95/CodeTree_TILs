const [nm, arr] = require('fs').readFileSync(0).toString().trim().split("\n");

const [n, m] = nm.split(" ").map(Number);
const numArr = arr.split(" ").map(Number);
let count = 0;
for(const el of numArr) {
    if(el === m) {
        count++;
    }
}

console.log(count);