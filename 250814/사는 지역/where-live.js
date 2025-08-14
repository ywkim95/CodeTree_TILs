const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const personLines = input.slice(1, n + 1);

// Please Write your code here.

class Person {
    constructor(name, streetNumber, region) {
        this.name = name;
        this.streetNumber = streetNumber;
        this.region = region;
    }
    
    printInfo() {
        console.log(`name ${this.name}`);
        console.log(`addr ${this.streetNumber}`);
        console.log(`city ${this.region}`);
    }
}

const people = Array(n).fill(null);

for(let i = 0; i < n; i++) {

    const [name, addr, city] = personLines[i].split(" ");
    people[i] = new Person(name, addr, city);
}

people.sort((a,b) => b.name > a.name ? 1 : b.name < a.name ? -1 : 0);

people[0].printInfo();