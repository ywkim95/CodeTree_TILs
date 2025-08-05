const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const index = arr.findIndex((v) => v === 0);

if(index !== -1) {
    arr.splice(index, arr.length - index);
}

const result = arr.map((v) => {
    if(v % 2 === 0) {
        return v / 2;
    } else {
        return v + 3;
    }
}).reduce((acc, cur) => `${acc} ${cur}`, "");
console.log(result.trim());

