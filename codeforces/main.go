package main

import (
	"fmt"
)

func main() {
	var weight int
	fmt.Scanf("%d", &weight)
	if weight%2 == 0 {
		fmt.Println("YES")
	} else {
		fmt.Println("NO")
	}
}
