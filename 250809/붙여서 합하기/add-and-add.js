const [a,b] = require('fs').readFileSync(0).toString().trim().split(" ");
const ab = a+b;
const ba = b+a;

console.log(+ab + +ba);