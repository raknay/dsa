### Backtracking
-------------------------
* Backtracking is a technique which uses recursion to build solution gradually.
* Let's say we want to construct a function which would take an array of numbers as input and we are asked to build all the permutation of the given numbers.
```
input: [1, 2, 3]
output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
```
* The idea here is let's say we have an empty array `[]` which will hold a single solution. Let's start with `1` from input `[1, 2, 3]` then push it to empty array `[]` and mark `1` as used and we have `[1]`.
* For 2nd position we have `2` and `3` to choose from, as `1` is already used. Let's say we add `2` and mark `2` as used. We have `[1, 2]` and for the last position we have only left with `3` so we add it and we have out first solution as `[1, 2, 3]`.
* As we have got one solution. Then we will back track from here that means we will remove `3`, mark it as unused and check if we have any other option to add to `[1, 2]` to get a different solution and the answer is no.
* Then we remove `2`, mark it as unused and check if we have any other option to add to the 2nd position of the solution array `[1]` to create a new solution and the answer is yes. We can add `3` to the second position which might create a new solution. So we add `3` to the second position and mark it as used then we add `2` to the 3rd position mark it as used and we get `[1, 3, 2]` which is a new solution.
* We again back track from here by removing `2`, `3` and `1` respectively and there is no possible unique solution to build so we move to other numbers `2` and `3`.
* Similarly we can keep `2` and `3` at the first position and build solution for them.
* As we know that recursion needs a base condition to finish the function call, in this case once the solution array has 3 elements, we would push the solution array to the parent array which holds all the solution and stop the function execution.
* To understand the code for backtracking, always start with small input and visualize how functions are placed on the call stack one by one with different function arguments.
```cpp
// c++
vector<vector<int>> results;
map<int, bool> used;
vector<int> result;

void permutation(vector<int> arr){
    if(result.size() == arr.size()){
        results.push_back(result);
        return;
    }
    for(int i = 0; i < arr.size(); ++i){
        if(!used[arr[i]]){
            result.push_back(arr[i]);
            used[arr[i]] = true;
            permutation(arr);
            result.pop_back();
            used[arr[i]] = false;
        }
    }
}
```
**Question 1:-** Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.  
Example 1:
```
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
```
Example 2:
```
Input: n = 1
Output: ["()"]
```
**Ans :-**
* We have to always start with open parenthesis else we won't be able to form the well-formed parenthesis. We have to keep track of the number of both open and closed parenthesis. If we consume any parenthesis, we would decrease it's corresponding count.
* Let's say we have 2 pairs of parenthesis, so we would start with `(`. No we have 1 open and 2 closed parenthesis to choose.
* Let's say we chose `(` which forms `((`. Now we have 0 open and 2 closed parenthesis and clearly we have to choose both the closed parenthesis one after another and we have `(())` as final string with is a valid string so we push to the result array.
* We backtrack from here and remove a closed parenthesis from the end and we don't have any other option to choose from, we again have to remove another closed parenthesis and still we don't have any other option which can be added after removing closed parenthesis to form a new solution.
* We then have to remove an open parenthesis and now we have an option to add closed parenthesis(`()`) so our next option is either closed open open parenthesis but closed parenthesis can't be choose as it's not form a valid result so we would choose open parenthesis and at the end a closed parenthesis which will form (`()()`) a valid solution.
```cpp
// c++
string s;
vector<string> result;

void generate(int open, int close){
    if(open == 0 && close == 0){
        result.push_back(s);
        return;
    }
    if(open > 0){
        s.push_back('(');
        generate(open - 1, close);
        s.pop_back();
    }
    if(close > 0){
        if(open < close){
            s.push_back(')');
            generate(open, close - 1);
            s.pop_back();
        }
    }
}
```