const arr = require('fs').readFileSync(0).toString().trim().split("\n");
const ch = arr.pop();

const result = [];

for(const el of arr) {
    if(el.at(el.length - 1) === ch) {
        result.push(el);
    }
}

console.log(
    result.length === 0
    ? "None"
    : result.join("\n")
);