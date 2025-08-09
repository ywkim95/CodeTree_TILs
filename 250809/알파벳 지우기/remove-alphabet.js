const [aStr,bStr] = require('fs').readFileSync(0).toString().trim().split("\n");
let a = getNumberStr(aStr);
let b = getNumberStr(bStr);

console.log(+a + +b)



function getNumberStr(arr) {
    let str = '';
    for(const el of arr) {
        if(!isNaN(+el)) {
            str += el;
        }
    }

    return str;
}