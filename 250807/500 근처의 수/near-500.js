const arr = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);

const maxArr = [], minArr = [];

for(const el of arr) {
    if(el > 500) {
        maxArr.push(el);
    } else {
        minArr.push(el);
    }
}
const max = maxArr.reduce((acc, cur) => acc > cur ? cur : acc, Number.MAX_SAFE_INTEGER);
const min = minArr.reduce((acc, cur) => acc > cur ? acc : cur, Number.MIN_SAFE_INTEGER);

console.log(`${min} ${max}`);