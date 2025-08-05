const arr = require('fs').readFileSync(0).toString().trim().split(" ").map(Number);
const countArr = Array(6).fill(0);

for(let i = 0; i < arr.length; i++) {
    countArr[arr[i]-1]++;
}

console.log(countArr.map((v,i) => `${i+1} - ${v}`).join("\n"));