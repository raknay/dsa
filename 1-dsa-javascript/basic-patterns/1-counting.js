/*
Write a function which takes two arrays as it's parameter and returns true if second array contains 
square of elements of first array in the same frequency
arr1 = [1, 4, 3, 2], arr2 = [1, 4, 9, 16] returns true
arr1 = [1, 1, 3, 2], arr2 = [1, 4, 9, 4] returns false
arr1 = [1, 1, 3, 2], arr2 = [1, 4, 9, 1] returns true
*/
let arr1 = [1, 1, 3, 2];
let arr2 = [4, 4, 9, 1];

function compareArray(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    let obj1 = {};
    let obj2 = {};

    for (let element of arr1) { // O(n)
        if(obj1[element]) {
            obj1[element] += 1; 
        } else {
            obj1[element] = 1;
        }
    }

    for (let element of arr2) { // O(n)
        if(obj2[element]) {
            obj2[element] += 1; 
        } else {
            obj2[element] = 1;
        }
    }

    for (let key in obj1) {  // O(n)
        if(obj1[key] !== obj2[key*key]) {
            return false;
        }

        if(!( (key*2).toString(10) in obj2 )) {
            return false;
        }
    }

    return true;
}

console.log(compareArray(arr1, arr2)); // false
// The above function has complexity of O(n)

/*
Write a function which takes two strings as it's parameter and returns true if second string is  
anagram of second string.(both the strings has same letter in same frequency)
str1 = 'boy', str2 = 'oyb' returns true
str1 = 'car', str2 = 'aar' returns false
str1 = 'space', str2 = 'pace' returns false
*/
let str1 = 'boy', str2 = 'oyb';

function compareString(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }
    let obj = {};

    for (let char of str1) {
        if(obj[char]) {
            obj[char] += 1; 
        } else {
            obj[char] = 1;
        }
    }

    for (let char of str2) {
        if(!obj[char]) { // compares if obj[char] === 0
            return false;
        }
        obj[char] -= 1;
    }

    return true;
}

console.log(compareArray(str1, str2)); // returns true