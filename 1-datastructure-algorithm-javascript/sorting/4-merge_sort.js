/*
In merge sort we divide the array until the length of the subarray is empty or contains only one element.  
*/

// takes two sorted arrays and merge them and returns another sorted array. 
function merge(arr1, arr2) {
    let i = 0, j = 0; // keeps track of the indices of both the arrays
    let arr = [];
    // loops until both the indices are greater than the length of their respective arrays
    while((i < arr1.length) || (j < arr2.length)) {
        // checks if one of the array is pushed to the empty array completely
        if((i === arr1.length ) || (j === arr2.length )) {
            if(i === arr1.length ) {
                arr = arr.concat(arr2.slice(j));
                return arr;
            }
            if(j === arr2.length) {
                arr = arr.concat(arr1.slice(i));
                return arr;
            }
        } else {
            if(arr1[i] < arr2[j]) {
                arr.push(arr1[i]);
                i++;
            } else if(arr1[i] > arr2[j]) {
                arr.push(arr2[j]);
                j++
            } else {
                arr.push(arr1[i], arr2[j]);
                i++;
                j++;
            }
        }
    }
    return arr;
}

// dividing array equally into two parts until the length of the array is zero or one.
// then calling the merge() function on the divided elements
function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let leftArr = mergeSort(arr.slice(0, mid)); 
    let rightArr = mergeSort(arr.slice(mid));
    return merge(leftArr, rightArr);
}

// let a, b = 0;
let arr = [89, 24, 8, 1, 6, 8];
console.log(mergeSort(arr));