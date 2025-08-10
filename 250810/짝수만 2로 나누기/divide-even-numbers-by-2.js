const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.

const result = arr.map((v) => {
    if(v % 2 === 0) {
        return v / 2;
    }
    return v;
}).join(' ');

console.log(result);