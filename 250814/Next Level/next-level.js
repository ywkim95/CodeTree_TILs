const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const level = parseInt(levelStr);

// Please Write your code here.

class Character {
    constructor(user_id = 'codetree', level = 10) {
        this.user_id = user_id;
        this.level = level;
    }

    printInfo() {
        console.log(`user ${this.user_id} lv ${this.level}`);
    }
}


const user1 = new Character();
const user2 = new Character(user_id, level);

user1.printInfo();
user2.printInfo();