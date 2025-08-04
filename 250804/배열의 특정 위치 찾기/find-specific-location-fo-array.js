const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let evenSum = 0;
let avg = 0;
for(let i = 1; i < input.length; i += 2) {
    evenSum += input[i];
}
for(let i = 2; i < input.length; i += 3) {
    avg += input[i];
}

console.log(`${evenSum} ${(avg/3).toFixed(1)}`);
