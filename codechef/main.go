package main

import (
	"fmt"
	"math"
)

func main() {
	var withdraw, balance float64
	fmt.Scanf("%f %f", &withdraw, &balance)
	fmt.Printf("%0.2f\n", withdrawal(withdraw, balance))
}

func withdrawal(withdraw, balance float64) float64 {
	if math.Mod(withdraw, 5) != 0 {
		return balance
	}

	if (balance - withdraw - 0.5) < 0 {
		return balance
	}

	return balance - withdraw - 0.5
}
