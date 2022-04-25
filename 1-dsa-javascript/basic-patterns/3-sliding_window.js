/* Question
Write a function which takes an array and a number(n) as it's parameter and returns the max sum of 
n consecutive elements of the array.
let array = [7,3,1,4,9,8] n = 2 // returns 17
*/
let array = [7, 3, 1, 4, 9, 8];
let n = 2;

function returnMaxSum(array, n) {
    if(array.length < n) { // same as array.length === 0
        return null;
    }
    let max = 0;
    let temp = 0;
    for(let i = 0; i < n; i++) {
        max += array[i];
    }
    temp = max;
    for(i = n; i < array.length; i++) {
        temp = temp - array[i - n] + array[i] // subtract start element and add next element with respect to n
        max = Math.max(temp, max)
    }

    return max;
}

console.log(returnMaxSum(array, n)); 

/* In the above solution, in the first iteration we are calculating sum for the first n elements and 
assign it to max. In the next iteration we are calculating sum of next consecutive elements by subtracting 
last element and adding next element.
1 - [(7, 3, 1), 4, 9, 8] temp = (7+3+1) - 7 + 4
2 - [7, (3, 1, 4), 9, 8] temp = (3+1+4) - 3 + 9
*/

/* Question
Write a function which takes a string as it's parameter and returns the length of longest substring
without repeating characters.
let array = [7,3,1,4,9,8] n = 2 // returns 17
*/

let str = 'hello';

function longestSubstring(str) {
    
    let start = 0, maxLength = 0;
    let chars = {};
    
    for(i = 0; i < str.length; i++) {
        let char = str[i];
        if(char in chars && start <= chars[char]) {
            start = chars[char] + 1;
        } else {
            maxLength = Math.max(maxLength, i - start + 1);
        }
        chars[char] = i;
    }
    return maxLength;
}

console.log(longestSubstring(str));
/* In the above solution start variable keeps track of trailing unique characters and keeps on sliding
to the next duplicate character of currently pointing character if found in iteration.
In 'hello' start points to h and i keeps on moving forward and we add unique characters to chars object
When it encounter l for the second time it checks if l presents in chars obj and moves start to duplicate 
l's index (i.e 3) 
*/