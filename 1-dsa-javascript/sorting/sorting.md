### Sorting
* Sorting is a way to sort elements in an iterable.Javascript have a inbuilt sorting function which sorts elements according to unicode code points.
* If we need to sort any array containing numbers we have to pass a callback function to the sort method 
```js
let array = [8, 7, 2, 4, 3, 6];
array.sort((a, b) => a - b);
console.log(array); // [ 2, 3, 4, 6, 7, 8 ]
``` 