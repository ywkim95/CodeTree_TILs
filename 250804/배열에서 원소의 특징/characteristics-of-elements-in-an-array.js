const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const index = input.findIndex((v) => v % 3 === 0);

console.log(input[index - 1]);