const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
function isPrimeNumber(n) {
    let sum = 0;

    for(let i = 2; i <= parseInt(Math.sqrt(n));i++) {
        if(n % i === 0) return false;
    }

    return true;
}

function countPrimeNumbers(n,m) {
    let sum = 0;
    for(let i = n; i <= m; ++i) {
        if(isPrimeNumber(i)) {
            sum += i;
        }
    }

    return sum;
}

console.log(countPrimeNumbers(A,B))