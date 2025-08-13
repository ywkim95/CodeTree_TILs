const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];

// Please Write your code here.
const a = str1.split("")
a.sort();
const b = str2.split("")
b.sort();

console.log(a.join("") === b.join("") ? "Yes" : "No")