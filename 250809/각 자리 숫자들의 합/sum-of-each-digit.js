const input = require('fs').readFileSync(0).toString().trim();
let sum = 0;
for(const el of input) {
    sum += +el;
}

console.log(sum);