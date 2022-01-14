package main

import "fmt"

func main() {
	var scores = []int{90, 70, 50, 80, 60, 85}
	bubbleSort(scores)
	fmt.Println(scores)
}

func bubbleSort(arr []int) {
	for i := 0; i < len(arr)-1; i++ {
		for j := 0; j < len(arr)-i-1; j++ {
			if arr[j] > arr[j+1] {
				temp := arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			}
		}
	}
}
