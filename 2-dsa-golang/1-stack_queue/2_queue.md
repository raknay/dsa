### Queue
* Queue is a linear data structure that follows the First In First Out rule - the item that goes in first is the item that comes out first.
* A queue is an object (an abstract data structure - ADT) that allows the following operations:
    * Enqueue: Add an element to the end of the queue
    * Dequeue: Remove an element from the front of the queue
    * IsEmpty: Check if the queue is empty
    * IsFull: Check if the queue is full
    * Peek: Get the value of the front of the queue without removing it
* We will be focusing on circular queue. In this type of queue we can do enqueue until the queue is full and if we do dequeue
  then we would be able to add elements to the empty space.
```
  f - front       r - rear
   f                       r
|  3  |  4  |  2  |  7  |  9  |   add 3, 4, 2, 7, 9 to the queue
         f                 r
|     |  4  |  2  |  7  |  9  |   remove 3 (Dequeue 3)
   r     f          
|  5  |  4  |  2  |  7  |  9  |   remove 3 (Enqueue 5)
```
```go
// implementation
type CircularQueue struct {
	queue []int
	size  int
	front int
	rear  int
}

// NewCQueue take size of queue and returns CircularQueue type
// default value for both front and rear is -1
func NewCQueue(size int) CircularQueue {
	cq := make([]int, size)
	return CircularQueue{cq, size, -1, -1}
}

func (c *CircularQueue) IsFull() bool {
	if c.front == 0 && c.rear == c.size-1 {
		return true
	}

	if c.front == c.rear+1 {
		return true
	}
	return false
}

func (c *CircularQueue) IsEmpty() bool {
	if c.front == -1 {
		return true
	} else {
		return false
	}
}

func (c *CircularQueue) EnQueue(ele int) {
	if c.IsFull() {
		fmt.Println("Queue is full")
	} else {
		if c.front == -1 {
			c.front = 0
		}
		c.rear = (c.rear + 1) % c.size // rear increments by 1 and goes to 0 if it's at the position (size - 1)
		c.queue[c.rear] = ele
		fmt.Println(ele, " has been added to the queue")
	}
}

func (c *CircularQueue) DeQueue() int {
	var ele int
	if c.IsEmpty() {
		fmt.Println("Queue is empty")
		ele = -1
		return ele // returns -1 if empty
	}

	if c.front == c.rear { // queue has only one element so we reset the front and rear
		ele = c.queue[c.front]
		c.front, c.rear = -1, -1
	} else {
		ele = c.queue[c.front]
		c.front = (c.front + 1) % c.size
	}
	return ele
}
```