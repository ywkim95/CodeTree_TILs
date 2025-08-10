const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.
function sameChar(str) {
    for(let i = 1; i < str.length; ++i) {
        if(str.at(i-1) !== str.at(i)) {
            return "Yes"
        }
    }

    return "No";
}

console.log(sameChar(A));