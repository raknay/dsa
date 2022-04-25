/**
 In Fibonacci series the next number is the addition of the last two numbers. 0, 1, 1, 2, 3, 5.
 We have to find the nth term of the series.
*/
let n = 100
function fibonacci(n) { // recursive method without memoization
    if(n === 0) {
        return 0;
    } else if(n === 1) {
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

console.log(fibonacci(n));

// with memoization
let t = [];
for(let i = 0; i <= n; i++) { // initialized an array with -1 globally
    t.push(-1);
}

function fibonacci(n) {
    if(t[n] !== -1) {
        return t[n];
    } 

    if(n === 0) {
        return t[n] = 0;
    } else if(n === 1) {
        return t[n] = 1;
    } else {
        return t[n] = fibonacci(n-1) + fibonacci(n-2);
    }
}

console.log(fibonacci(n));