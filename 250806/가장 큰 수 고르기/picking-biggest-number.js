const arr = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);
let maxValue = 0;

for(const el of arr) {
    if(el > maxValue) {
        maxValue = el;
    }
}

console.log(maxValue);