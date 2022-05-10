function factorialRecurssive(number) {
    if (number === 2) {
        return 2;
    }
    return number*factorialRecurssive(number-1);
}

function factorialIterative(number) {
    let factorial = 1;
    for (let i = number; i > 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

console.log(factorialIterative(5));
console.log(factorialRecurssive(5));