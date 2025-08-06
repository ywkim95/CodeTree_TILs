const [n, arr] = require('fs').readFileSync(0).toString().trim().split("\n");
const num = Number(n);
const numArr = arr.split(" ").map(Number);

let count = 0;
let minValue = Number.MAX_SAFE_INTEGER;

for(const el of numArr) {
    if(minValue > el) {
        minValue = el;
        count = 0;
    }

    if(minValue === el) {
        count++;
    }
}

console.log(`${minValue} ${count}`);