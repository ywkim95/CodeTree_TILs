const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.

function isCps(arr1, arr2) {
    if(arr1.length === arr2.length) {
        const isAll = arr1.every((v,i) => v === arr2[i]);
        if(isAll) {
            return "Yes";
        }
        return "No";
    }
    for(let i = 0; i < arr1.length-arr2.length; ++i) {
        const isAll = arr2.every((v,j) => arr1[i+j] === v);
        if(isAll) {
            return "Yes";
        }
    }
    return "No";
}

console.log(isCps(a,b));