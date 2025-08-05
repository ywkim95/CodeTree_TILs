const arr = require('fs').readFileSync(0).toString().trim().split(" ");
const index = arr.findIndex((v) => +v === 0);

const numberArr = Array(9).fill(0);

if(index !== -1) {
    arr.splice(index, arr.length - index);
}

for(const el of arr) {
    if(el.length === 1) {
        continue;
    }
    numberArr[Number(el.at(0))-1]++;
}

console.log(numberArr.map((v, i) => `${i+1} - ${v}`).join("\n"));
