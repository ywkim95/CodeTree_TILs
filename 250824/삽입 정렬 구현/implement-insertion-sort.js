const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

function insertionFunction(arr) {
    let len = arr.length;
    for(let i = 1; i < len; i++) {
        let j = i-1;
        let key = arr[i];

        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;    
        }
        arr[j + 1] = key;
    }
}


insertionFunction(arr);
console.log(arr.join(" "));