### Stack
* A stack is a linear data structure that follows the principle of **Last In First Out**. This means the last element inserted inside the stack is removed first.
* There are some basic operations that allow us to perform different actions on a stack.
    * Push: Add an element to the top of a stack
    * Pop: Remove an element from the top of a stack
    * IsEmpty: Check if the stack is empty
    * IsFull: Check if the stack is full
    * Peek: Get the value of the top element without removing it

#### Practice Problems :-
-------------------------
**Question 1:-** Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
    1. Open brackets must be closed by the same type of brackets.
    2. Open brackets must be closed in the correct order.

Example 1:
```
Input: s = "()"
Output: true
```
Example 2:
```
Input: s = "()[]{}"
Output: true
```
Example 3:
```
Input: s = "(]"
Output: false
```
**Ans:-**
* We would create a stack then we will traverse through the given string character by character 
* While traversing if we encounter any of the open braces(`{, (, [ `), 
    then we will push it to the top of the stack.
* While traversing if we encounter any of the closing braces(`}, ), ] `),
    then we will check if stack is empty and if stack is empty, if opening brace is present for the current closing brace and return false
    then we will compare it with element which is present at top of the stack. if type of opening and closing braces doesn't match (`ie { & ]`) return false, if types match then pop the top item from the stack and go to the next character in traversal.
```go
// golang
func isBalanced(s string) string {
	stack := make([]string, len(s))
	ptr := -1                     // pointer points to the top element in the stack
	for i := 0; i < len(s); i++ { // travrse the string
		c := fmt.Sprintf("%c", s[i])
		if c == `(` || c == `{` || c == `[` { // check for opening braces
			ptr += 1
			stack[ptr] = c // push if opening braces
		} else {
			if ptr == -1 { // if stack is empty and encountered closing braces
				return "false" // no opening brace for current closing brace
			}
			curr := stack[ptr] // current top element of stack
			// check if curr (opening) and c (closing) braces of different type
			if c == `)` && curr != `(` || c == `]` && curr != `[` || c == `}` && curr != `{` {
				return "false"
			}
			stack[ptr] = "" // pop the top element if opening and closing braces are of same type
			ptr -= 1
		}
	}
	if ptr != -1 { // if stack is not empty
		return "false"
	}
	return "true"
}
```
```cpp
// c++
string isBalanced(string str) {
    stack<char> s;
    for(char c:str){
        if (c == '[' || c == '(' || c == '{') {
            s.push(c);
        } else {
            if (s.empty()) {
                return "false";
            }
            if ((c == ')' && s.top() != '(') || (c == ']' && s.top() != '[') || (c == '}' && s.top() != '{')) {
				return "false";
			}
            s.pop();
        }
    }
    if (!s.empty()){
        return "false";
    }
    return "true";
}
```
**Question 2:-** For input an array, print the Next Greater Element (NGE) for every element. The Next greater Element for an element x is the first greater element on the right side of x in the array. Elements for which no greater element exist, consider the next greater element as -1.
Example 1:
```
Input Array - [7, 3, 9, 8]
Output - 9 9 -1 8
```
**Ans:-**
* We will loop through elements of the given array then for a particular element we would compare to the elements in the stack from the top.
* If there current element from the top of stack is less than current element of the input array then we know that current element of array is the nge of current element of stack.
* We save the nge for current element of stack and pop it form the stack. We will continue it until stack is not empty and the current element from the top of stack is less than current element of the input array.
```go
// golang
func nge(arr []int) {
	stack := make([]int, len(arr)) // stack of indexes (not stack of elements)
	ans := make([]int, len(arr))   // indexes of NGE
	top := -1
	for idx, ele := range arr {
		for top != -1 && arr[stack[top]] < ele { // if stack is not empty and top element of stack is less than current element(ele)
			ans[stack[top]] = idx // current element is NGE of top element of stack
			top -= 1              // pop the top element
		}
		top += 1
		stack[top] = idx
	}
	for top != -1 {
		ans[stack[top]] = -1 // store -1 in place of index if NGE is not present
		top -= 1
	}
	for i, ele := range ans {
		if ele == -1 {
			fmt.Println(arr[i], " ", ele)
			continue
		}
		fmt.Println(arr[i], " ", arr[ele])
	}
}
```
```cpp
// c++
void nge(vector<int> arr){
    stack<int> st; // store indexes of input array
    vector<int> ans(arr.size()); // store indexes of NGE from input array
    for(int i = 0; i < arr.size(); ++i){
        while (!st.empty() && arr[st.top()] < arr[i]){
            ans[st.top()] = i;
            st.pop();
        }
        st.push(i);
    }
    while(!st.empty()){
        ans[st.top()] = -1;
        st.pop();
    }
    
    for(int i = 0; i < arr.size(); ++i){
        if (ans[i] == -1) {
            cout << arr[i] << " " << -1 << endl;
            continue;   
        }
        cout << arr[i] << " " << arr[ans[i]] << endl;
    }
}
```