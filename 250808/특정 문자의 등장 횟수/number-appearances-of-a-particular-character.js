const str = require('fs').readFileSync(0).toString().trim();

let eecnt = 0, ebcnt = 0;
for(let i = 0; i < str.length-1; i++) {
    const s = str.slice(i,i+2);
    if(s === 'ee') {
        eecnt++;
    }
    if(s === 'eb') {
        ebcnt++;
    }
}

console.log(`${eecnt} ${ebcnt}`);