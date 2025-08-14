const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

class Int {
    constructor(id, value, index) {
        this.id = id;
        this.value = value;
        this.index = index;
    }

    updateIndex(index) {
        this.index = index;
    }
}

const valueCmp = (a,b) => a.value - b.value;
const idCmp = (a,b) => a.id - b.id;

const list = arr.map((v,i) => new Int(i+1, v, i));

list.sort(valueCmp);

list.forEach((v,i) => v.updateIndex(i+1));
list.sort(idCmp);

console.log(list.map((v) => v.index).join(" "));