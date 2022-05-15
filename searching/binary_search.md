### Binary Search
* Binary search is applied on monotonic functions. Monotonic functions are the functions which maintains a given order.
* If an array of integers are sorted in ascending or descending order we can say that it's monotonic. Value of x^2 where `0 < x < n`(n being any positive number) is also monotonic.
```cpp
// c++ implementation
void binary_search(vector<int> arr, int target){
    int low = 0; // start index of input array
    int high = arr.size()-1; // end index input array

    // at the end of this loop the target element would preset either at low index or at high index if present
    while(high - low > 1){ 
        int mid = (high + low) / 2;
        if(arr[mid] < target){
            low = mid + 1;
        }else{
            high = mid;
        }
    }

    if(arr[low] == target){
        cout << low << endl;
    }else if(arr[high] == target){
        cout << high << endl;
    }else{
        cout << "Not present" << endl;
    }
}
```
```go
// golang implementation
func bSearch(arr []int, target int) {
	high := len(arr) - 1
	low := 0

	for high-low > 1 {
		mid := (high + low) / 2
		if arr[mid] < target {
			low = mid + 1
		} else {
			high = mid
		}
	}

	if arr[low] == target {
		fmt.Println(low)
	} else if arr[high] == target {
		fmt.Println(high)
	} else {
		fmt.Println("Not present")
	}
}
```
#### Practice Problems :- 
-------------------------
**Question 1:-** Find the `nth` root of a given number `x` up to `zth` precession . `x`, `n` and `z` would be given as input.
Example 1:
```
Input: 4 2 4 // n = 4, x = 2, z = 4
Output: 2
```
Example: 2:
```
Input: 2 2 3
Output: 1.414 // square root of 2 precession up to 3 decimal places
```
**Ans:-**
* Let say we want to find out square root of 3(`1.732`) up to 2 decimal places. We know that the answer would lie between 1 to 3 so out search space would be between 1 to 3.
* At some point lets say at some point we have search space between 1.731 and 1.734, we know at this point that we have achieved accuracy up to 2 decimal places. We define a `precession` variable of value let's say `1e-3 = 0.001` and if `high - low` is less than `precession` variable then we know that we have achieved the precession.
```cpp
// c++ implementation
double precession = 1e-5;

double n_times(double num, int root){
    double result = 1;
    for(int n = 1; n <= root; ++n){
        result *= num;
    }
    return result;
}

void root(double num, int root){
    double high = num;
    double low = 1;
    while (high - low > precession){
        double mid = (high + low)/2;
        if (n_times(mid, root) < num) {
            low = mid;
        } else {
            high = mid;
        }
    }
    cout << low << endl;
}
```
```go
// go implementation
// nTimes multiples the mid value root times and returns the result
func nTimes(num float64, root int) float64 {
	result := float64(1)
	for n := 1; n <= root; n++ {
		result *= num
	}
	return result
}

func root(num float64, root int) {
	var precession float64 = 1e-5 // 0.00001
	high, low := float64(num), float64(1)
	var mid float64
	for high-low > precession {
		mid = (high + low) / 2
		if nTimes(mid, root) < num {
			low = mid
		} else {
			high = mid
		}
	}
	fmt.Println(high)
}
```