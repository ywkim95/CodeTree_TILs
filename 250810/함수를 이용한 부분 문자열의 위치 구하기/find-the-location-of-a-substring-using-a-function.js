const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0];
const pattern = input[1];

// Please Write your code here.

function indexOf(arr, pattern) {
    const listLen = arr.length;
    const ptrnLen = pattern.length;
    let idx = -1;
    const bools = Array(ptrnLen).fill(false);
    for(let i = 0; i < listLen-ptrnLen+1; ++i) {
        for(let j = 0; j < ptrnLen; ++j) {
            if(arr[i+j] === pattern.at(j)) {
                bools[j] = true;
            }
        }
        if(bools.every(v => v)) {
            idx = i;
            return idx;
        }
        bools.fill(false);
    }

    return idx;
}

console.log(indexOf(text,pattern));