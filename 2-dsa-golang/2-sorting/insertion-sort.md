### Insertion Sort
* We start from the element at index 1 of array move up to the last element of array and we compare the elements to there previous(left) elements put the elements in the proper position as explained below.
* For sorting in ascending order, we remove the current element from it's position then we compare it with all the elements to it's left one by one.
* The elements which are greater then the current element, we shift those elements to their right until we find any element which is smaller than the current element
```go
func insertionSort(arr []int) {
	for i := 1; i < len(arr); i++ { // loop from index 1 to last index(current index)
		currEle := arr[i]                // get current element from current index and store it
		j := i - 1                       // start from the left element of the current element
		for j >= 0 && arr[j] > currEle { // check if left elements are greater than current element one by one
			arr[j+1] = arr[j] // elements greater than current element shifted one place to the right
			j -= 1
		}
		arr[j+1] = currEle
	}
}
```