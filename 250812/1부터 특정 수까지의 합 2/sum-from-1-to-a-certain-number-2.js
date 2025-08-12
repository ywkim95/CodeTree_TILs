const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

function rec(n) {
    if(n === 1) {
        return 1;
    }

    return rec(n-1) + n;
}

console.log(rec(n));