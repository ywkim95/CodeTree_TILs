const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryStr = input[0];

// Please Write your code here.
function toDecimal(numStr) {
    let decimal = 0;
    for(let i = 0; i < numStr.length; i++) {
        decimal += parseInt(2**(numStr.length - i - 1)*numStr.at(i));
    }
    return decimal;
}

console.log(toDecimal(binaryStr));