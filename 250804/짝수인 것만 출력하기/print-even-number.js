const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

const result = arr.filter((v) => v % 2 === 0).reduce((acc, cur) => `${acc} ${cur}`, "");
console.log(result.trim());

