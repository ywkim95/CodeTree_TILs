const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0];

// Please Write your code here. 
function toDecimal(binaryStr) {
    let decimal = 0;

    for(let i = 0; i < binaryStr.length; i++) {
        decimal += 2**(binaryStr.length - i - 1)*Number(binaryStr.at(i));
    }

    return decimal;
}

function toBinary(n) {
    const arr = [];

    while(true) {
        if(n < 2) {
            arr.push(n);
            break;
        }

        arr.push(n%2);
        n = Math.floor(n/2);
    }

    return arr.reverse().join("");
}

function multiplySeventeen(n) {
    const decimal = toDecimal(n);
    return  toBinary(decimal * 17);
}

console.log(multiplySeventeen(binaryInput));