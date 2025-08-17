const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map((v) => v.split(' '));

// Please Write your code here.
class Tile {
  constructor(id) {
    this.id = id;
    this.color = 'G';
  }

  update(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}
const left = commands
  .filter((v) => v[1] === 'L')
  .reduce((acc, cur) => acc + Number(cur[0]), 0);
const right = commands
  .filter((v) => v[1] === 'R')
  .reduce((acc, cur) => acc + Number(cur[0]), 0);

const LEN = left + right;
const tiles = Array.from({ length: LEN }, (_, i) => new Tile(i + 1));
let idx = parseInt(LEN / 2) + 1;

for (const command of commands) {
  const [xStr, LR] = command;
  const x = Number(xStr);

  let i = 0;
  if (LR === 'R') {
    for (; i < x; i++) {
      tiles[idx + i].update('B');
    }
    idx = idx + i - 1;
  } else {
    for (; i < x; i++) {
      tiles[idx - i].update('W');
    }
    idx = idx - i + 1;
  }
}

let wCount = 0;
let bCount = 0;

tiles.forEach((v) => {
  if (v.getColor() === 'W') {
    wCount++;
  } else if (v.getColor() === 'B') {
    bCount++;
  }
});

console.log(`${wCount} ${bCount}`);
