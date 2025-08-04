const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const index = arr.findIndex((v) => v === 0);
if(index !== -1) {
    arr.splice(index, arr.length - index);
}

const result = arr.filter((v) => v % 2 === 0);

console.log(`${result.length} ${result.reduce((acc, cur) => acc + cur, 0)}`)
                