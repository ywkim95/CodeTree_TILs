const arr = require('fs').readFileSync(0).toString().trim().split("\n");
arr.pop();

let filtered = arr.filter((_, i) =>  i % 2 === 0);

console.log(`${arr.length}\n${filtered.join("\n")}`);