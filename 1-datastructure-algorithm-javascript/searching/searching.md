### Searching

* Linear Search
* Binary Search: 
In binary search we search from a sorted array of the numbers.In each iteration we check with respect to the mid point of startIndex and endIndex. If the number is present at the midpoint, we would return the index else if number is greater than the number at the midpoint then we can easily assume that the number lies between midpoint and endIndex hence we move startIndex to the midpoint + 1 position(because we have checked the midpoint). If the number is less than the number at midpoint then we would move the end index to midpoint - 1.