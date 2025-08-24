const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
function selectionSort(arr) {
    for(let i = 0; i < arr.length-1; i++) {
        let min = i;
        for(let j = i+1; j < arr.length;j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
    }
}

selectionSort(arr);
console.log(arr.join(" "));