const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [u_code, l_color, time] = input[0].split(' ');
// Please write your code here.
class Bomb {
    constructor(u_code, l_color, time) {
        this.u_code = u_code;
        this.l_color = l_color;
        this.time = time;
    }

    printInfo() {
        console.log(`code : ${u_code}`);
        console.log(`color : ${l_color}`);
        console.log(`second : ${time}`);
    }
}

const bomb = new Bomb(u_code, l_color, time);

bomb.printInfo();
