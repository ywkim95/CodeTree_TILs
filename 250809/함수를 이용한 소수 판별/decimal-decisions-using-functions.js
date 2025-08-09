const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

function countPrimeNumbers(n,m) {
    let sum = 0;
    for(let i = n; i <= m; ++i) {
        if(i === 2 || i === 3 || i === 5 || i === 7) {
            sum += i;
        }
        if(i%2 === 0 || i%3 === 0 || i%5===0 || i%7===0) {
            continue;
        }
        sum += i;
    }

    return sum;
}

console.log(countPrimeNumbers(A,B))