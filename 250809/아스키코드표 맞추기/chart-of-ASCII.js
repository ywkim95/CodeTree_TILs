const arr = require('fs').readFileSync(0).toString().trim().split(" ").map(Number);

let result = '';

for(const el of arr) {
    result += String.fromCharCode(el) + ' ';
}

console.log(result.trim());