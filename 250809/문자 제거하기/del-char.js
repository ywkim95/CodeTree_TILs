let [str, ...arr] = require('fs').readFileSync(0).toString().trim().split("\n");

for(let i = 0; i < arr.length; i++) {
    if(+arr[i] >= arr.length) {
        str = str.slice(0,-1);
    } else {
        str = str.slice(0,+arr[i]) + str.slice(+arr[i]+1);
    }

    console.log(str);
}