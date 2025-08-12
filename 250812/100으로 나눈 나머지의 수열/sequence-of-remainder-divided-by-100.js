const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please Write your code here.

function func(n) {
    if(n === 1) {
        return 2;
    }
    if(n === 2) {
        return 4;
    }

    return (func(n-1) * func(n-2)) % 100;
}

console.log(func(N));