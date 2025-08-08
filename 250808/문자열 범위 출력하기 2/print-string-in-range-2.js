const [str, n] = require('fs').readFileSync(0).toString().trim().split("\n");
let result="";
for(let i = str.length-1; i >= str.length-n; i--) {
    if(i < 0) {
        break;
    }
    result += str.at(i);
}

console.log(result)