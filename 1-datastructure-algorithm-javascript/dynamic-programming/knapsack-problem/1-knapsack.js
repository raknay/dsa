// given data (inputs)
let wt = [3, 2, 5, 4];
let val = [2, 4, 7, 6];
let W = 10;

// with recursion only ( no memoization )
function knapsack(wt, val, W, n) {
    if(n === 0 || W === 0) { // base condition
        return 0;
    }

    if(W >= wt[n-1]) { // if weight of the element is less than or equal to capacity
        return Math.max(val[n-1] + knapsack(wt, val, W-wt[n-1], n-1), knapsack(wt, val, W, n-1));
    } else{
        return knapsack(wt, val, W, n-1); // if the weight of element is greater than capacity
    }
}

console.log(knapsack(wt, val, W, wt.length)); // 13

// with memoization
let t = [];
for(let n = 0; n <= wt.length; n++) { // initialize the array to -1 in the global scope 
    let temp = [];
    for(let w = 0; w <= W; w++) {
        temp.push(-1);
    }
    t.push(temp);
}

function knapsack(wt, val, W, n) {
    if(t[n][W] !== -1) { // checking if the value is already calculated and present
        return t[n][W];
    }

    if(n === 0 || W === 0) {
        return 0;
    }

    if(W >= wt[n-1]) {
        // storing max profit for the passed W and n
        t[n][W] = Math.max(val[n-1] + knapsack(wt, val, W-wt[n-1], n-1), knapsack(wt, val, W, n-1));
        return t[n][W];
    } else{
        // storing max profit for the passed W and n
        t[n][W] = knapsack(wt, val, W, n-1);
        return t[n][W]; // same as return t[n][W] = knapsack(wt, val, W, n-1);
    }
}

console.log(knapsack(wt, val, W, wt.length)); // 13

// using top-down
let t = [];

for(let i = 0; i <= wt.length; i++) { // initialize the array to -1 in the global scope 
    let temp = [];
    for(let j = 0; j <= W; j++) {
        temp.push(-1);
    }
    t.push(temp);
}

function knapsack(wt, val, W, n) {
    for(let i = 0; i <= wt.length; i++) { // base condition in recursive function 
        for(let j = 0; j <= W; j++) {
            if(i === 0 || j === 0) {
                t[i][j] = 0
            }
        }
    }

    for(i = 1; i <= n; i++) {
        for(j = 1; j <= W; j++) {
            if(wt[i-1] <= j) {
                t[i][j] = Math.max(val[i-1] + t[i-1][j - wt[i-1]], t[i-1][j]);
            } else {
                t[i][j] = t[i-1][j];
            }
        }
    }

    return t[n][W];
    
}

console.log(knapsack(wt, val, W, wt.length)) // 13