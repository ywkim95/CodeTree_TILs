const input = require('fs').readFileSync(0).toString().trim();
let str = '';
for(let i = +input; i > 0; i--) {
    const result = Array(i).fill('*').join(' ');
    str += result;

    if(i !== 1) {
        str += '\n';
    }
}

console.log(str);
