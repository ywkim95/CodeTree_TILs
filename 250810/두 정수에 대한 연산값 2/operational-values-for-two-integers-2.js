const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
// Please Write your code here.
function f(a,b) {
    if(a > b) {
        return [a*2,b+10];
    } else {
        return [a+10,b*2];
    }
}

const result = f(a,b).join(" ");
console.log(result);