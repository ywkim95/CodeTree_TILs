const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const y = Number(input[0]);
// Please Write your code here.

function isLeapYear(y) {
    if(y % 100 === 0 && y % 400 !== 0) return false;
    if(y%4 === 0) return true;

    return false;
}

console.log(isLeapYear(y));