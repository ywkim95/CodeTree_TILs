const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [prod2_id, code2] = input[0].split(' ');
// Please Write your code here.

class Product {
    constructor(name = 'codetree', code = 50) {
        this.name = name;
        this.code = code;
    }
    printInfo() {
        console.log(`product ${this.code} is ${this.name}`);
    }
}

const product1 = new Product();
const product2 = new Product(prod2_id, code2);

product1.printInfo();
product2.printInfo();