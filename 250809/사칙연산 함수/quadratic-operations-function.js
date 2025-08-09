const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);
// Please Write your code here.

function arithmetic(flag, n, m) {
    switch(flag) {
        case "+":
            return add(n,m);
        case "-":
            return subtract(n,m);
        case "*":
            return multiply(n,m);
        case "/":
            return divide(n,m);
        default:
            return -1;
    }
}

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return parseInt(a / b);
}


const result = arithmetic(o,a,c);
if(result === -1) {
    console.log("False");
} else {
    console.log(`${input[0]} = ${result}`);
}