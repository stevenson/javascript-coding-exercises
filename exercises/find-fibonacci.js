function fibonacciRecursive(n){ 
    // O(2^n)
    // more readable - but has larger complexity
    if(n < 2){
        return n;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);

}
function fibonacciIterative(n){ 
    // O(n)
    // less readable - but is faster
    let arr = [0, 1];
    for(let i=2; i<n+1; i++){
        arr.push(arr[i-2]+arr[i-1]);    
    }
    return arr[n];
}

console.log(fibonacciIterative(5));

console.log(fibonacciRecursive(5));