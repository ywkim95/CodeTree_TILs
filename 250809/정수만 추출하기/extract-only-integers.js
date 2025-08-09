const [a,b] = require('fs').readFileSync(0).toString().trim().split(" ");
let astr = '', bstr = '';
const aIdx = sliceArr(a);
astr = a.slice(0,aIdx);
const bIdx = sliceArr(b);
bstr = b.slice(0,bIdx);

console.log(+astr + +bstr)

function sliceArr(arr) {
    const condition = arr.split("").filter(v=>v).findIndex((v) => isNaN(+v));
    if(condition === -1) {
        return arr.length;
    }
    return condition;
}