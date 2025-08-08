let str = require('fs').readFileSync(0).toString().trim();

const fir = str.at(0);
const sec = str.at(1);
str = str.replaceAll(sec, fir);

console.log(str);