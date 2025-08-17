const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.
let idx = 0;
const list = new Map();
for(const command of commands) {
    const [xStr, cmd] = command.split(' ');
    const x = Number(xStr);
    if(cmd === 'R'){
        let i = idx+1;
        for(; i <= x+idx; i++) {
            const v =  list.get(i) ?? 0;
            list.set(i, v + 1);
        }
        idx = i-1;
    } else {
        let i = idx;
        for(; i > idx-x; i--) {
            const v = list.get(i) ?? 0;
            list.set(i, v + 1);
        }
        idx = i;
    }
}
let cnt = 0;

list.forEach((v) => {
    if(v >= 2) {
        cnt++;
    }
});

console.log(cnt);