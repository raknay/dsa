package main

import "fmt"

func main() {
	nums := []int{2, 4, 5, 7, 9}
	target := 10
	fmt.Println(binarySearch(0, len(nums)-1, nums, target)) // -1
	fmt.Println(binarySearchIter(nums, 2))
}

// recurrsive implementation
func binarySearch(startIdx int, endIdx int, nums []int, target int) int {
	if startIdx > endIdx {
		return -1
	}

	midIdx := (startIdx + endIdx) / 2

	if nums[midIdx] == target {
		return midIdx
	} else if nums[midIdx] > target {
		return binarySearch(startIdx, midIdx-1, nums, target)
	} else {
		return binarySearch(midIdx+1, endIdx, nums, target)
	}
}

// iterative implementation
func binarySearchIter(nums []int, target int) int {
	startIdx, endIdx := 0, len(nums)-1
	var midIdx int

	for startIdx <= endIdx {
		midIdx = (startIdx + endIdx) / 2
		if target == nums[midIdx] {
			return midIdx
		} else if nums[midIdx] > target {
			endIdx = midIdx - 1
		} else {
			startIdx = midIdx + 1
		}
	}
	return -1
}
