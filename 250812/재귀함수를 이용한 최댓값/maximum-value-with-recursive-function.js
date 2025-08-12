const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.

function maxRec(arr, idx = 0, max = 0) {
    if(arr.length === idx) return max;
    if(arr[idx] > max) max = arr[idx];

    return maxRec(arr, idx+1, max);
}

console.log(maxRec(arr))