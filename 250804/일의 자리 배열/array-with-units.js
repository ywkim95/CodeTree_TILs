const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

for(let i = 2; i < 10; i++) {
    const v = (input[i-1] + input[i-2]) % 10;
    input.push(v);
}

console.log(input.reduce((acc, cur) => `${acc} ${cur}`, "").trim())