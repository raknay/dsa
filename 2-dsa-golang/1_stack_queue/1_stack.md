### Stack
* A stack is a linear data structure that follows the principle of **Last In First Out**. This means the last element inserted inside the stack is removed first.
* There are some basic operations that allow us to perform different actions on a stack.
    * Push: Add an element to the top of a stack
    * Pop: Remove an element from the top of a stack
    * IsEmpty: Check if the stack is empty
    * IsFull: Check if the stack is full
    * Peek: Get the value of the top element without removing it
```go
package main

import "fmt"

func main() {
	s := newStack(5)
	// s.push(1)
	// s.push(2)
	// s.push(3)
	// s.push(4)
	// s.push(5)
	s.pop()
	// s.printElements()
}

type stack struct {
	stck     []int // holds the elements
	capacity int   // total number of elements that can be stored in the stack
	top      int   // postion of top element in the stack(value is -1 when stack if empty)
}

// Creates a new stack with capacity
func newStack(capacity int) stack {
	arr := make([]int, capacity)
	s := stack{arr, capacity, -1}
	return s
}

func (s *stack) push(ele int) bool {
	if s.top == s.capacity-1 {
		fmt.Println("Stack is full")
		return false
	}
	s.top += 1          // Increament the top position by 1
	s.stck[s.top] = ele // Save the new element in the new position
	return true
}

func (s *stack) pop() bool {
	if s.top == -1 {
		fmt.Println("Stack is empty")
		return false
	}
	s.stck[s.top] = 0
	s.top -= 1
	return true
}

func (s *stack) printElements() {
	if s.top == -1 {
		fmt.Println("Stack is empty")
	}
	for i := 0; i <= s.top; i++ {
		fmt.Println(s.stck[i])
	}
}
```