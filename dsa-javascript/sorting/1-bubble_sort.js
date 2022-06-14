/*
In bubble sort we progressively compare one element with the next element and if second one is less  than
the first one, we swap the elements.We start comparing first and second, then second and third until 
we reach the end of array.

By the first iteration the greatest number should be at the end of the array.So in the second iteration
we compare up to element n-1(n is length of the array)
*/

let array = [8, 7, 2, 4, 3, 6];

function bubbleSort(array) {
    for(let i = array.length - 1; i >= 0; i--) {
        for(let j = 0; j <= i; j++) {
            if(array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort(array));

/*
In bubble sort if we have 4 elements we would make 10 iterations and it's possible that the array is sorted
in the 3rd iteration but the sorting algorithm would still complete all 10 iterations.
We can optimize the bubble sort by checking if a swapping is made in an iteration and if we don't make any
swap, then for next iterations also we won't make any swap and we would break out of the loop 

If most of the elements in the array are sorted then bubble sort can be really fast.
*/

let array = [8, 2, 3, 4, 6]

function bubbleSort(array) {
    let swap;
    for(i = array.length - 1; i >= 0; i--) {
        swap = false
        for(j = 0; j <= i; j++) {
            if(array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swap = true;
            }
        }
        if(!swap) break;
    }
    return array;
}

console.log(bubbleSort(array));