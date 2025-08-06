const [n, ar] = require("fs").readFileSync(0).toString().trim().split("\n");
const num = Number(n);
const arr = ar.split(" ").map(Number);

let diff = 0;
let idx = 0;
while(idx !== num - 1) {
    const el = arr[idx];
    const res = arr.slice(idx+1).filter((v) => v > el).reduce((acc, cur) => acc > cur ? acc : cur, diff) - el;
    
    if(res > diff) {
        diff = res;
    }

    idx++;
}

console.log(diff)