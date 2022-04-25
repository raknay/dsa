/*
Binary search function takes an sorted array and a number returns the index of the number if it is present 
else returns -1
*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 10;

function binarySearch(array, num) {
    if(array.length === 0) {
        return -1;
    } else if (array.length === 1) {
        return array[0] === num ? 0 : -1;
    }

    let startIndex = 0, endIndex = array.length - 1;
    while(startIndex <= endIndex) {
        let tempIndex =  Math.floor((endIndex + startIndex) / 2);
        if(array[tempIndex] === num ) {
            return tempIndex;
        } else if(array[tempIndex] > num) {
            endIndex = tempIndex - 1;
        } else {
            startIndex = tempIndex + 1;
        }
    }
    return -1
}

console.log(binarySearch(array, num));