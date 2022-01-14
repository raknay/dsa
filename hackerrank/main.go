package main

import (
	"fmt"
	"sort"
)

func main() {
	// arr := []int32{8, 2, -9, 4, 5}
	arr1 := []int32{256741038, 623958417, 467905213, 714532089, 938071625} // 2063136757 2744467344
	minMaxSum(arr1)
}

func minMaxSum(arr []int32) {
	sort.SliceStable(arr, func(i, j int) bool {
		return arr[i] < arr[j]
	})
	fmt.Println(arr)
	println(arr[0]+arr[1]+arr[2]+arr[3], arr[4]+arr[1]+arr[2]+arr[3], int64(arr[4])+int64(arr[1])+int64(arr[2])+int64(arr[3]))
}
