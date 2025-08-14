const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const students = [];
for (let i = 0; i < 5; i++) {
  const [name, heightStr, weightStr] = input[i].split(' ');
  const height = Number(heightStr);
  const weight = Number(weightStr);
  students.push({ name, height, weight });
}

// Please Write your code here.
class Person {
  constructor(name, height, weight) {
    this.name = name;
    this.height = +height;
    this.weight = +weight;
  }

  print() {
    console.log(`${this.name} ${this.height} ${this.weight.toFixed(1)}`)
  }
}

const nameCmp = (a,b) => {
  if(a.name > b.name) {
    return 1;
  } else if(a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
}
const heightCmp = (a,b) => {
  return b.height - a.height;
};

const people = students.map((v) => new Person(v.name, v.height, v.weight));

console.log('name');
people.sort(nameCmp);
people.forEach((v) => v.print());

console.log('\nheight');
people.sort(heightCmp);
people.forEach((v) => v.print());