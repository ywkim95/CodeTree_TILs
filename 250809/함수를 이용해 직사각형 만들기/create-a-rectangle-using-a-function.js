const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

// Please Write your code here.

const result = Array(n).fill(0).map(() => Array(m).fill(1));

console.log(result.map(v => v.join("")).join("\n"));