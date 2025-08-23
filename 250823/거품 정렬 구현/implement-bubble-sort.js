const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
function bubbleSort(arr) {
    const length = arr.length;
    let sorted = true;

    do {
        sorted = true;
        for(let i = 0; i < length-1; i++) {
            if(arr[i] > arr[i+1]) {
                const tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
                sorted = false;
            }
        }
    } while(!sorted);
}

bubbleSort(arr);
console.log(arr.join(" "));