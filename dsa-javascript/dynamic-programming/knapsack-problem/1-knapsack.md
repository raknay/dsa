### Knapsack Problem
We have a sack which can contain total weight of "W".We have few items which have weight "w" and value "v".So we have to select items in such a way that their total weight shouldn't exceed the weight that the sack can contain i.e "W" and we should get the maximum value combined of all items.
1. We can break the item and add to the sack. (fraction knapsack) ( use greedy algorithm )
2. We can't break the items so items should be added as whole.Same item can't be added to the sack once it added. (0/1 knapsack) 
3. We can add one item multiple times. ( unbounded knapsack )

* The inputs given are 
```
wt = [3, 2, 5, 4]
val = [2, 4, 7, 6]
W = 10
```
* We can choose form the items given above(we can decide if an item can be added or not)
* We have to find an optimal solution(max, min, longest, shortest, etc) 
So from above deduction we can say that it can be solved by dynamic programming.
#### Analysis For Recursive Function
* When adding an item to the sack we have consider following things
1. Item's weight shouldn't be greater the weight supported by sack.(i.e `wt[i] <= W`)
2. While adding an item we have to subtract the weight from the total weight of the sack(`W`)
3.  We have to add the weight of the item to the accumulated weight
##### Choice Diagram
```
                         Item
             (W >= wt[i])  | (W < wt[i])
            |---------------------------|
            |                    don't include
    |----------------|
 include        don't include 
```
* Let's say the function named `knapsack` would return the maximum value(profit) which would take input weight array(`wt[]`), value array(`val[]`), total capacity of the sack(`W`) and length of the first two arrays(`n`).
* When writing recursive function we first have to think about base condition.We can evaluate base condition by thinking about the smallest valid input(input should be valid)
* In the above case we can pass zero for the capacity of the sack(`W`) and also for the length of the array(`n`).
* If we have a sack which have capacity of zero or we have arrays without any item in it, for either of the cases we will get maximum value(profit) of zero, so we can write 
```js
if(W === 0 || n === 0) {
    return 0;
}
```
* Now we have to write code for the choice diagram. So if we include one item, we will get the value of that item and the weight of the item.So we have to add the value and reduce the capacity(`W - wt[i]`).
* If we don't include the item then we have to move to the next item but before we have to find what would be the maximum profit for the both the condition(i.e if we include or don't include).
```js
// we are starting form the last element of array
if(wt[i] <= W) {
  // selecting max between if we include an element or doesn't include an element 
  return max(val[i] + knapsack(wt, val, W-wt[n], n-1), knapsack(wt, val, W, n-1));
}
```
* If the weight of the element is greater than the capacity of the sack then we can't add it to the sack 
```js
if(wt[i] > W) {
  return knapsack(wt, val, W-wt[n], n-1);
}
```
#### Analysis For Memoization
* In memoization we store value of the function calls for different states and if during the recursive call we face the same state for the function call we don't calculate the value again instead we get the value from storage and return it.
* To memoize the states we use array of single of multi dimension depending upon the given problem.
* In the above problem we are calling `knapsack()` function recursively with minimized input. From the inputs we have to find out which arguments are getting changed during the recursive call.In this case, the capacity(`W`) and length of array(`n`).
* So we have to make a 2 dimensional array dimension `W+1 x n+1`. This is because we also have to check for capacity(`W`) becomes zero and also if length of array becomes zero. Let's call the array `t` with elements initialized to -1.(x axis represent capacity `W` and y axis represents length of array `n`)

 n/W|0 |1 | 2| 3| 4| 5| 6| 7| 8| 9|10|
----|--|--|--|--|--|--|--|--|--|--|--|
  0 |-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|
  1 |-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|
  2 |-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|
  3 |-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|
  4 |-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|

* Value stored at `t[0][0]` represents the profit when length of array is zero and capacity is zero. Similarly `t[4][10]` represents the profit when length of array is 4 and capacity is 10.
```js
t = [
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
];
```
* We will check if the cell contains any value other than -1. If yes we will return the value without calling recursive function else we will store the value and then we will return the the value.
#### Analysis For Top-Down Approach
* In top-down approach we don't use use recursive function at all, but to solve in top-down method we should write the recursive function first.
* After writing recursive solution we can easily convert it to top-down matrix.
* To solve in top-down approach, we first draw a matrix of dimension `n+1 x W+1`(same as in memoization). Let's call the matrix `t`.
* Then we initialize the matrix
* Then instead of using recursive function we use iteration method.

 n/W|0 |1 | 2| 3| 4| 5| 6| 7| 8| 9|10|
----|--|--|--|--|--|--|--|--|--|--|--|
  0 |-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|
  1 |-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|
  2 |-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|
  3 |-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|
  4 |-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|

* As we need to store the max profit when length is zero and capacity is zero all the way up to when length is 4 and capacity is 10, that's the reason we have to use the matrix of dimension `n+1 x W+1`.
* We have taken `n` in y axis(let's call it `i`(0 to 4)) and `W` in x axis(let's call it `j`(0 to 10)).
* Let's think about the cell where `i = 2` and `j = 4`. The value in the cell represent the max value(profit) when length is 2(i.e only first two elements are present) and weight is 4 units. So the inputs for the above condition would be `wt = [3, 2], val = [2, 4], W = 4`.
* Cell where `i = 4` and `j = 10` represents the the answer to the given problem. 
* So essentially we are dividing the big problem into small problems, gradually solving small problems and adding the answer to solve the big problem.
**Steps To Solve**
* First we have to initialize the matrix form the base condition of the recursive function.
```js
if(n === 0 || W === 0) { // base condition
  return 0;
}
```
* This means if capacity of sack is zero or the length of the array is zero(i.e no elements in array), the max profit would always be zero. So the initialization would be 

 n/W| 0| 1| 2| 3| 4| 5| 6| 7| 8| 9|10|
----|--|--|--|--|--|--|--|--|--|--|--|
  0 | 0| 0| 0| 0| 0| 0| 0| 0| 0| 0| 0|
  1 | 0|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|
  2 | 0|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|
  3 | 0|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|
  4 | 0|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|
* Code for top-down matrix(iterative method):-
```js
for(let i = 0; i <= wt.length; i++) { // base condition in recursive function to top-down
        for(let j = 0; j <= W; j++) {
            if(i === 0 || j === 0) {
                t[i][j] = 0
            }
        }
    }
```
* To convert recursive calls to top-down, we have to replace `knapsack()` with `t`.Here `i` represents length of array and `j` represents capacity of the sack.
* As we have initialized the matrix, so we have to consider next elements. 
```js
