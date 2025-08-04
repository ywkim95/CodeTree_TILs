const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split("\n");
const N = arr.shift();

const doubleArr = arr.map((v) => v.split(" ").map(Number));

const reduceArr = doubleArr.map((v) => {
    return v.reduce((acc, cur) => acc + cur, 0) / 4;
});

let passedCount = 0;
let str = "";
for(const el of reduceArr) {
    if(el >= 60) {
        str += "pass\n";
        passedCount++;
    } else {
        str += "fail\n";
    }
}

console.log(`${str}${passedCount}`);