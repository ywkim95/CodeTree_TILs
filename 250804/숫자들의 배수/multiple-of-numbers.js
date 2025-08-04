const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

const arr = [];

let n = Number(input);
let count = 0;
let index = 0;

while(true) {
    if(count === 2) break;
    arr.push(n * (index + 1));
    if(arr[index] % 5 === 0) {
        count++;
    }
    index++;
}

const result = arr.reduce((acc, cur) => `${acc} ${cur}`, "").trim();

console.log(result);