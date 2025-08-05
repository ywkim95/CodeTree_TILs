const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const arr = Array(4).fill(0);

for(const el of input) {
    const [sym, temp] = el.split(" ");
    if(sym === "Y") {
        if(+temp >= 37) {
            arr[0]++;
        } else {
            arr[2]++;
        }
    } else if(sym === "N") {
        if(+temp >= 37) {
            arr[1]++;
        } else {
            arr[3]++;
        }
    }
}

let result = arr.join(" ");

if(arr[0] >= 2) {
    result += " E";
}

console.log(result);