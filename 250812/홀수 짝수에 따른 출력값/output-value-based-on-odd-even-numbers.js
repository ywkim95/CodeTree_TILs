const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.
function func(n) {
    if(n === 2) {
        return 2;
    }
    if(n === 1) {
        return 1;
    }
    return func(n-2) + n;
}

console.log(func(n));