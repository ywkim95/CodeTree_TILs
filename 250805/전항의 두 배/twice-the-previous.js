const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let index = 2;
let sum = (arr[0] * 2) + arr[1];
while(index < 10) {
    arr.push(sum);
    index++;
    sum += (arr[index-2] * 2);
}

console.log(arr.reduce((acc, cur) => `${acc} ${cur}`,"").trim());