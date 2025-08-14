const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [s_code, m_point, time] = input[0].split(' ');
// Please Write your code here.

class Secret {
    constructor(s_code, m_point, time) {
        this.s_code = s_code;
        this.m_point = m_point;
        this.time = time;
    }

    printSecret() {
        console.log(`secret code : ${s_code}`);
        console.log(`meeting point : ${m_point}`);
        console.log(`time : ${time}`);
    }
}

const sec = new Secret(s_code, m_point, time);

sec.printSecret();