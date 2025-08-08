const [n, ...arr] = require("fs").readFileSync(0).toString().trim().split("\n");
const ch = arr.pop();
let sum = 0;
let result = [];

for(const el of arr) {
    if(el.at(0) === ch) {
        sum += el.length;
        result.push(el);
    }
}


console.log(`${result.length} ${(sum/result.length).toFixed(2)}`);