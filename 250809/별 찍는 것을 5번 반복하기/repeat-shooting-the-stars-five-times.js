let str = '';

function tenStars() {
    return '*'.repeat(10);
}

for(let i = 0; i < 5; i++){
    str += tenStars();
    if(i !== 4) {
        str += '\n';
    }
}

console.log(str);