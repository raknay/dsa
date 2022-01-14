package main

import "fmt"

type Set struct {
	integerMap map[int]bool
}

func (set *Set) New() {
	set.integerMap = make(map[int]bool)
}

func (set *Set) ContainsElement(element int) bool {
	_, exists := set.integerMap[element]
	return exists
}

func (set *Set) AddElement(element int) {
	if !set.ContainsElement(element) {
		set.integerMap[element] = true
	}
}

func (set *Set) DeleteElement(element int) {
	delete(set.integerMap, element)
}

func(set *Set)PrintElemets(){
	for key, _ := range set.integerMap {
		fmt.Println(key)
	}
}

func main() {
	var integerSet Set
	integerSet = Set{}
	integerSet.New()
	integerSet.AddElement(1)
	integerSet.AddElement(1)
	integerSet.AddElement(2)
	integerSet.AddElement(3)
	integerSet.AddElement(4)
	integerSet.PrintElemets()
	
}
