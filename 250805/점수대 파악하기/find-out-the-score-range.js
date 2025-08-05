const arr = require('fs').readFileSync(0).toString().trim().split(" ");

const index = arr.findIndex((v) => +v === 0);

if(index !== -1) {
    arr.splice(index, arr.length - index);
}

const numberArr = Array(10).fill(0);

for(const el of arr) {
    if(el.length === 1) {
        continue;
    } else if(el.length === 3) {
        numberArr[9]++;
    } else {
        numberArr[+el.at(0)-1]++;
    }
}

console.log(numberArr.map((v,i) => `${i + 1}0 - ${v}`).reverse().join("\n"));