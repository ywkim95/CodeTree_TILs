const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const arr = ['L', 'E', 'B', 'R', 'O', 'S'];

const index = arr.findIndex((v) => v === input);

if(index === -1) {
    console.log('None');
} else {
    console.log(index);
}