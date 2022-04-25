package main

import "fmt"

type Node struct {
	key  int
	next *Node
}

type List struct {
	head   *Node
	length int
}

func (l *List) Prepend(key int) {
	node := &Node{
		key: key,
	}
	if l.head == nil {
		l.head = node
		l.length++
		return
	}
	temp := l.head
	l.head = node
	node.next = temp
	l.length++

}

func (l *List) Append(key int) {
	node := &Node{
		key: key,
	}
	if l.head == nil {
		l.head = node
		l.length++
		return
	}
	current := l.head
	for current.next != nil {
		current = current.next
	}
	current.next = node
	l.length++
}

func (l *List) Print() {
	if l.length == 0 {
		fmt.Println("List is empty")
		return
	}
	current := l.head
	for current != nil {
		fmt.Printf("%d ", current.key)
		current = current.next
	}
	fmt.Println()
}

func main() {
	var list List
	list.Prepend(1)
	list.Prepend(2)
	list.Prepend(3)
	fmt.Println(list.head, list.length)
	list.Print()
}
