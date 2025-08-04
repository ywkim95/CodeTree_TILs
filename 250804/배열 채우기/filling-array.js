const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number).reverse();

if(arr[0] === 0) {
    arr.shift();
}

const str = arr.reduce((acc, cur) => `${acc} ${cur}`, "").trim();

console.log(str);
