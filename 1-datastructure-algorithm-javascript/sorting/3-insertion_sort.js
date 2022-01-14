/*
In insertion sort we start form index 1(current value) and compare with index 0. Then we start form index 2
(current value) and compare with index 1 and 0. While comparing if we find current value is less then 
any of the elements at the index then we insert current value in the position and increase the position
of greater value by 1.

if value at index 5 is less than value at index 1 we assign the value at index 5 to index 1. The element 
at index 1 will go to index 2.
[8, 7, 2, 4, 3, 6] - compare index 1 and 5
[8, 6, 7, 2, 4, 3] - insert value at index 5 at 1 and shift value at index 1 to index 2
*/

let array = [8, 7, 2, 4, 3, 6];

function insertionSort(array) {
    for(let i = 1; i < array.length; i++) {
        let currentVal = array[i]; // keep track of current value
        let checkedIndex;
        for(let j = i - 1; j >= 0 && array[j] > currentVal; j--) {
            array[j + 1] = array[j] // increment the index if greater than current value
            checkedIndex = j // keep track of the index
        }
        array[checkedIndex] = currentVal; // insert at index 
    }
    return array;
}

console.log(insertionSort(array));