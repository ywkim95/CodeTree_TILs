const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1).map(line => line.trim().split(' ').map(Number));

// Please Write your code here.
class Point {
    constructor(id, x, y) {
        this.id = id;
        this.x = +x;
        this.y = +y;
    }

    distance(point) {
        return Math.abs(this.x - point.x) + Math.abs(this.y-point.y);
    }

    getId() {
        return this.id;
    }
}
const origin = new Point(0, 0, 0);
const cmp = (a, b) => {
    if(a.distance(origin) === b.distance(origin)) {
        return a.id - b.id;
    }

    return a.distance(origin) - b.distance(origin);
}

const pointers = points.map((v, i) => new Point(i+1, ...v));

pointers.sort(cmp);

const result = pointers.map((v) => v.getId()).join("\n");

console.log(result);