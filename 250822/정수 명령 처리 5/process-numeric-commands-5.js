const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.
const arr = [];

function pushBack(a) {
    arr.push(a);
}
function popBack() {
    arr.pop();
}
function size() {
    console.log(arr.length);
}
function getValue(i) {
    console.log(arr[i-1]);
}

for(const cmd of commands) {
    const [c, v] = cmd.split(" ");
    switch(c) {
        case "push_back":
            pushBack(v);
            break;
        case "pop_back":
            popBack();
            break;
        case "size":
            size();
            break;
        case "get":
            getValue(v);
            break;
    }
}