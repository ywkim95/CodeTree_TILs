const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];
// Please Write your code here.

function toDecimal(n, a) {
    let decimal = 0;

    for(let i = 0; i < n.length; i++) {
        decimal += a**(n.length - i - 1)*Number(n.at(i));
    }

    return decimal;
}

function toNumber(n, b) {
    const arr = [];

    while(true) {
        if(n < b) {
            arr.push(n);
            break;
        }
        
        arr.push(n%b);
        n = Math.floor(n/b);
    }

    return arr.reverse().join("");
}

function doubleConversion(n, a, b) {
    const decimal = toDecimal(n, a);
    return toNumber(decimal, b);
}

console.log(doubleConversion(n,a,b));