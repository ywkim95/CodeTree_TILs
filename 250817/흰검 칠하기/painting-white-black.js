const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

// Please Write your code here.
class Tile {
    constructor(id, color, cnt = 0) {
        this.id = id;
        this.color = color;
        this.cnt = cnt;
    }

    update(color) {
        this.cnt++;
        if(this.cnt >= 4){
            this.color = "G"
        } else {
            this.color = color;
        }
    }

    getColor() {
        return this.color;
    }

    getCnt() {
        return this.cnt;
    }
}

const tiles = Array.from({length: 1001}, (_, i) => new Tile(i+1,"N"))
let idx = 500;
for(const command of commands) {
    const [xStr, LR] = command;
    const x = Number(xStr);
    
    if(LR === 'R') {
        let i = idx;
        for(; i < x+idx; i++) {
            tiles[i].update("B");
        }
        idx = i-1;
    } else {
        let i = idx;
        for(; i > idx-x; i--) {
            tiles[i].update("W");
        }
        idx = i+1;
    }
}
const whiteCnt = tiles.filter((v) => v.getColor() === "W").length;
const blackCnt = tiles.filter((v) => v.getColor() === "B").length;
const grayCnt = tiles.filter((v) => v.getColor() === "G").length;

console.log(`${whiteCnt} ${blackCnt} ${grayCnt}`);