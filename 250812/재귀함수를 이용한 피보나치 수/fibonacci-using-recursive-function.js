const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function fibonacci(n) {
    if(n <= 2) {
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(n))