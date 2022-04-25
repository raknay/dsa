let n = 5;

function factorial(n) {
    if(n === 0 || n === 1) {
        return 1
    } else {
        return n * factorial(n-1);
    }
}

console.log(factorial(n));

// with memoization
let t = [];
for(let i = 0; i <= n; i++) { // initialized an array with -1 globally
    t.push(-1);
}

function factorial(n) {
    if(t[n] !== -1) {
        return t[n];
    }
    if(n === 0 || n === 1) {
        return t[n] = 1;
    } else {
        return t[n] = n * factorial(n-1);
    }
}

console.log(factorial(n));