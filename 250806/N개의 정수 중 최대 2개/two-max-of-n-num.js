const [n, arr] = require('fs').readFileSync(0).toString().trim().split("\n");
const num = Number(n);
const numArr = arr.split(" ").map(Number);
const sortedList = Array(num).fill(0);

function merge(list, left, mid, right) {
    let i = left;
    let j = mid+1;
    let k = left;

    while(i <= mid && j <= right) {
        if(list[i]<=list[j]) {
            sortedList[k++] = list[i++];
        } else {
            sortedList[k++] = list[j++];
        }
    }

    if(i > mid) {
        for(l = j; l <= right; l++) {
            sortedList[k++] = list[l];
        }
    } else {
        for(l = i; l <= mid; l++) {
            sortedList[k++] = list[l];
        }
    }
    for(l = left; l <= right; l++) {
        list[l] = sortedList[l];
    }
}


function mergeSort(list, left, right) {
    if(left < right) {
        let mid = Math.floor((left+right)/2);
        mergeSort(list, left, mid);
        mergeSort(list, mid+1, right);
        merge(list,left,mid,right);
    }
}
mergeSort(numArr, 0, n-1);

console.log(`${numArr[n-1]} ${numArr[n-2]}`);