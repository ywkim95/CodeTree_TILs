const arr = require('fs').readFileSync(0).toString().trim().split(" ").map(Number);
let maxNum = Number.MIN_SAFE_INTEGER;
let minNum = Number.MAX_SAFE_INTEGER;
let idx = 0;
while(arr[idx] !== 999 && arr[idx] !== -999) {
    const el = arr[idx];
    if(el > maxNum) maxNum = el;
    if(el < minNum) minNum = el;
    idx++;

    if(idx >= arr.length) {
        break;
    }
}

console.log(`${maxNum} ${minNum}`);