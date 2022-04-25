### Stack
* A stack is a linear data structure that follows the principle of **Last In First Out**. This means the last element inserted inside the stack is removed first.
* There are some basic operations that allow us to perform different actions on a stack.
    * Push: Add an element to the top of a stack
    * Pop: Remove an element from the top of a stack
    * IsEmpty: Check if the stack is empty
    * IsFull: Check if the stack is full
    * Peek: Get the value of the top element without removing it

#### Problems
---
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
// cpp
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