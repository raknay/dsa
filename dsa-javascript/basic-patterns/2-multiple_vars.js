/* Question
Write a function which takes a sorted array as it's parameter and returns the first pair which
sums to zero else undefined
let array = [-3, -2, -1, 0, 1, 2] // returns [-2, 2]
*/
let array = [-3, -2, -1, 0, 1, 2]; // sorted

function returnPair(array) {
    let startIndex = 0, endIndex = array.length - 1;
    while(startIndex < endIndex) {
        if(array[startIndex] + array[endIndex] === 0) { // checks the sum
            return [array[startIndex], array[endIndex]]
        } else if(array[startIndex] + array[endIndex] > 0) { 
            // as sum is greater than zero, we have to move the endIndex to lessen the sum towards zero
            endIndex--;
        } else {
            // as sum is less than zero, we have to move the startIndex to increase the sum towards zero
            startIndex++;
        }
    }
    return undefined
}

console.log(returnPair(array)); // returns [-2, 2]

/* As we know the array is sorted, we can define two variables which points to the start and end element of
the array.
*/

/* Question
Write a function which takes a sorted array as it's parameter and returns an array with all the unique
values(duplicates removed)
let array = [-3, -2, -1, 0, 1, 2] // returns [-2, 2]
*/
let array = [-1, -1, 0, 1, 1, 2, 3, 3, 3, 4, 5, 5]; // sorted

function returnUnique(array) {
    let uniqueArr = []
    if(array.length === 0) {
        return uniqueArr;
    }
    let first = 0, second = 0; // both  points to first  element of array 
    while(second < array.length) {
        if(first === 0 && second === 0) { // initialization
            uniqueArr.push(array[first]);
        } else if(array[first] !== array[second]) { // checking if unique
            uniqueArr.push(array[second]); // pushing to the array
            first = second; // make first point to the unique value 
        }
        second++;
    }
    return uniqueArr
}

console.log(returnUnique(array)); // returns [-2, 2]

/* In the above solution we iterate through the passed array. When we get a unique value, we use the 
variable first(index of unique value) to point to it and comparing next values with the variable second. 
Each time we get a unique value, we are pushing it to unique array and then we make first variable
points to the same element. We are incrementing the second variable in each loop
*/

/* Question
Write a function which takes two strings as it's parameter and returns true if first string is a 
substring of second string
*/
let str1 = 'lao';
let str2 = 'hello';

function isSubString(str1, str2) {
    if(!str1.length) {
        return true;
    }

    let i = 0, j = 0;

    while(j < str2.length) {
        if(str1[i] === str2[j]) i++;
        if(i === str1.length - 1) return true;
        j++;
    }
    return false
}

console.log(isSubString(str1, str2)); // false