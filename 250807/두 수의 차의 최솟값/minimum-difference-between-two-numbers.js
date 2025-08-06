const [n, ar] = require("fs").readFileSync(0).toString().trim().split("\n");
const num = Number(n);
const arr = ar.split(" ").map(Number);
let min = arr[1] - arr[0];
for(let i = 2; i < arr.length; ++i) {
    const temp = arr[i] - arr[i-1];
    if(min > temp) {
        min = temp;
    }
}

console.log(min)