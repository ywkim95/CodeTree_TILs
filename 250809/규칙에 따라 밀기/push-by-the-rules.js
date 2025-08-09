let [str, cmds] = require('fs').readFileSync(0).toString().trim().split('\n');

for(const cmd of cmds) {
    if(cmd === 'L') {
        str = str.slice(1) + str.slice(0,1);
    } else {
        str = str.slice(-1) + str.slice(0,-1);
    }
}

console.log(str);