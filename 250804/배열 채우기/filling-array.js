const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);
const index = arr.findIndex((v) => v === 0);
if(index !== -1) {
    arr.splice(index, arr.length - index);
}

const str = arr.reverse().reduce((acc, cur) => `${acc} ${cur}`, "").trim();

console.log(str);
