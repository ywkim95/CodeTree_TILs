const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];
// Please Write your code here.

function isPalindrome(str) {
    let reversedStr = '';
    for(let i = str.length-1; i >= 0; --i) {
        reversedStr += str.at(i);
    }

    if(reversedStr === str) {
        return true;
    }

    return false;
}


const result = isPalindrome(str) ? "Yes" : "No";

console.log(result);
