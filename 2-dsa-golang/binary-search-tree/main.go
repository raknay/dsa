package main

import (
	"fmt"
	"math"
)

type Node struct {
	Key   int
	Left  *Node
	Right *Node
}

type Tree struct {
	Root *Node
}

// Tree
func (t *Tree) Insert(k int) {
	if t.Root == nil {
		t.Root = &Node{Key: k}
	} else {
		t.Root.Insert(k)
	}
}

// Node
func (n *Node) Insert(k int) {
	if n.Key > k {
		if n.Left == nil {
			n.Left = &Node{Key: k}
		} else {
			n.Left.Insert(k)
		}
	} else {
		if n.Right == nil {
			n.Right = &Node{Key: k}
		} else {
			n.Right.Insert(k)
		}
	}
}

// Tree
func (t *Tree) Search(k int) bool {
	if t.Root == nil {
		return false
	}
	return t.Root.Search(k)
}

// Node
func (n *Node) Search(k int) bool {
	if n == nil {
		return false
	}

	if n.Key > k {
		return n.Left.Search(k)
	} else if n.Key < k {
		return n.Right.Search(k)
	}
	return true
}

// finding max height of a binary tree
func maxHeight(root *Node) float64 {
	if root == nil {
		return 0
	}

	return 1 + math.Max(maxHeight(root.Left), maxHeight(root.Right))
}

// mak value of key
func maxKey(node *Node) int {
	if node.Right == nil {
		return node.Key
	}
	return maxKey(node.Right)
}

func main() {
	var t Tree

	t.Insert(30)
	t.Insert(60)
	t.Insert(70)
	// fmt.Println(maxHeight(t.Root)) // true
	fmt.Println(maxKey(t.Root))
}
