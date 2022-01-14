/*
In quick sort we take a pivot point in the given array and try to place it on the right place(move all smaller and greater element to left and right respectively).
Then from all the elements on the left, we take another pivot element and try to place the element at the exact location as before. From all the right elements, we 
take another pivot element and try to place the element at the exact location as before.
*/
// Here we take pivot element as the first element of the start index.
function pivot(arr, start, end) {
    const swap = (array, i, j) => {
        [array[i], array[j]] = [array[j], array[i]]
    };

    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start + 1; i <= end; i++ ) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, i, swapIdx);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left, right) {
    if(left < right) {
        let pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx);
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

let arr = [89, 24, 8, 1, 6, 8];
console.log(quickSort(arr, 0, arr.length-1));