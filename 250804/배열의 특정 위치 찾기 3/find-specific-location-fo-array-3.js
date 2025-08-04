const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const index = input.findIndex((v) => v === 0);

const a = input.slice(index-3, index);

console.log(a.reduce((acc, cur) => acc + cur, 0));