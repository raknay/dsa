package main

import "fmt"

func main() {
	str := "racecare"
	fmt.Println(isPalindrome(str))
}

func isPalindrome(str string) bool {
	start, end := 0, len(str)-1
	for start < end {
		if string(str[start]) != string(str[end]) {
			return false
		}
		start += 1
		end -= 1
	}
	return true
}
