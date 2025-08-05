const [n, arr] = require('fs').readFileSync(0).toString().trim().split("\n");

const num = Number(n);
const numArr = arr.split(" ").map(Number);

let idx = 0;

for(let i = 0; i < numArr.length; ++i) {
    if(numArr[i] === 2) {
        idx++;
        if(idx === 3) {
            idx = i;
            break;
        }
    }
}

console.log(numArr.indexOf(2, idx)+1);