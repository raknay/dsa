### Bubble Sort
* This algorithm compares two adjacent elements and swaps them if they are not in the desired order.
```go
package main

import "fmt"

func main() {
	var scores = []int{90, 70, 50, 80, 60, 85}
	bubbleSort(scores)
	fmt.Println(scores)
}

func bubbleSort(arr []int) {
	for i := 0; i < len(arr)-1; i++ { // iterate (length - 1) times
		for j := 0; j < len(arr)-i-1; j++ { // iterate up to last sorted element
			if arr[j] > arr[j+1] { 
				temp := arr[j]
				arr[j] = arr[j+1] 
				arr[j+1] = temp
			}
		}
	}
}
```
* Outer loop should run (length - 1) times because if let's say we have 4 element then we in first 2 iterations last 2 elements would be sorted and in the 3rd iteration the remaining 2 elements would be sorted so outer loop would be run (length - 1) times.
* Inner loop should run up to the last element sorted i.e `length - 1 - i` times.
#### Optimization
* Let's say the array is sorted but the above algorithm would still iterate through all the element and the complexity would be O(n^2).
* To optimize we can have a flag and it would keep track if the inner loop swaps at least one pair of elements. Let's say an array contains 4 elements(4, 5, 6, 7) and outer loop would run for 3 times and inner loop would run up to last element sorted.
* In the first iteration of outer loop(`i = 0`), when `j=0` we won't swap, for `j=1` we won't swap, for `j=2` we won't swap. In this case we can tell that the array is already sorted so we can break out of outer loop and save the further iterations.
```go
// optimized
func bubbleSort(arr []int) {
	for i := 0; i < len(arr)-1; i++ {
		swapped := false
		for j := 0; j < len(arr)-i-1; j++ {
			if i == 0 {
				fmt.Println(j+1, arr[j], arr[j+1])
			}
			if arr[j] > arr[j+1] {
				temp := arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
				swapped = true
			}
		}
		if !swapped { // if no elements ware swapped in the previous inner loops then break out of outer loop
			break
		}
	}
}
```