const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const n = parseInt(input);

const arr = [1, n];
let count = 1 + n;
while(true) {
    arr.push(count);
    if(count > 100) {
        break;
    }

    count += arr[arr.length - 2];
}

console.log(arr.reduce((acc, cur) => `${acc} ${cur}`, "").trim());
