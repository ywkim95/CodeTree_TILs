const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.
function sumDigit(result) {
    if(result < 10) {
        return result;
    }
    let str = result.toString();
    return Number(str.at(0)) + sumDigit(Number(str.slice(1)));
}

console.log(sumDigit(a*b*c));