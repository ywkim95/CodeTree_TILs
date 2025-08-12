const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function rec(n, idx = 0) {
    if(n === 1) {
        return idx;
    }

    idx++;

    if(n%2 === 0) {
        return rec(parseInt(n/2), idx);
    } else {
        return rec(parseInt(n/3), idx);
    }
}

console.log(rec(n));