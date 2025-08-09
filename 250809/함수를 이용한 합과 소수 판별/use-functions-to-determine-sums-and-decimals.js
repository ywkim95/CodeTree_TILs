const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

function isPrimeNumber(n) {
    for(let i = 2; i <= parseInt(Math.sqrt(n)); ++i) {
        if(n % i === 0) return false;
    }

    return true;
} 

function isOddNumber(n) {
    const str = n.toString();
    let sum = 0;
    for(let i = 0; i < str.length; ++i) {
        sum += +str.at(i);
    }

    return sum % 2 === 0;
}

let cnt = 0;

for(let i = A; i <= B; ++i) {
    if(isPrimeNumber(i) && isOddNumber(i)) {
        cnt++;
    }
}

console.log(cnt);