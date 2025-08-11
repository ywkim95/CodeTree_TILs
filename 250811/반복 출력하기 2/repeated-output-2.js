const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
const str = "HelloWorld";

function repeatHelloWorld(idx) {
    if(idx === 0) {
        return;
    }
    repeatHelloWorld(idx-1);
    console.log(str);
}

repeatHelloWorld(n);