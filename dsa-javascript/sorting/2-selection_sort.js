/*
In selection sort we start from the index zero and then compare elements of the rest of the indices to 
find the minium.If any minimum value is present then we assign the value to index zero and the value of
index zero to the index where the minimum value is found. 

Lets say index 4 has minimum value so we will assign value of index 4 to index 0 and value of index zero
to index 4.So now we have smallest item at index zero.

We would do the same for index 1, 2, etc...
*/

let array = [8, 2, 3, 4, 6]

function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
        let min = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[min] > array[j]) {
                min = j;
            }
        }
        if(min !== i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

console.log(selectionSort(array));