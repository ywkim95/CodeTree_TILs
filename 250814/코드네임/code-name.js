const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const codenames = [];
const scores = [];

for (let i = 0; i < input.length; i++) {
    const [codename, score] = input[i].split(' ');
    
    codenames.push(codename);
    scores.push(parseInt(score, 10));
}

// Please Write your code here.
class Agent {
    constructor(codename, score) {
        this.codename = codename;
        this.score = parseInt(score);
    }
}

const agents = Array(input.length).fill(0);

for(let i = 0; i < agents.length; i ++) {
    const [codename, score] = input[i].split(' ');
    agents[i] = new Agent(codename, score);
}
agents.sort((a,b) => a.score - b.score);
const lower = agents[0];

console.log(`${lower.codename} ${lower.score}`);
