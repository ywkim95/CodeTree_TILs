const total = require("fs").readFileSync(0).toString().trim().split("\n");
const arr = total[1].split(" ").map(Number);

const result = arr.filter((v) => v % 2 === 0).reverse();

if(result.length === 0) {
    console.log('0');
} else {
    console.log(`${result.reduce((acc, cur) => `${acc} ${cur}`, "").trim()}`);
}