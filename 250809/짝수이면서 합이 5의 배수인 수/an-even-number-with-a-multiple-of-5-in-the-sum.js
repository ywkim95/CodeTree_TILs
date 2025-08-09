const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function isMagicNumber(n) {
    if(n%2 !== 0) {
        return false;
    }

    const ten = parseInt(n/10);
    const one = n%10;

    return (ten+one)%5 === 0;
}

const result = isMagicNumber(n) ? "Yes" : "No";

console.log(result);