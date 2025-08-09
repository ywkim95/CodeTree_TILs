const [strq, ...arr] = require('fs').readFileSync(0).toString().trim().split("\n");

let [str, q] = strq.split(' ');

function a(str) {
    return str.slice(1) + str.slice(0,1);
}
function b(str) {
    return str.slice(-1) + str.slice(0,-1)
}
function c(str) {
    let newStr = '';
    for(let i = str.length-1; i >=0;--i) {
        newStr += str[i];
    }

    return newStr;
}

let result = '';
for(let i = 0; i < arr.length; i++) {
    if(+arr[i] === 1) {
        str = a(str);
    } else if(+arr[i] === 2) {
        str = b(str);
    } else {
        str = c(str);
    }
    result += str;

    if(i !== arr.length-1) {
        result += '\n';
    }
}

console.log(result);