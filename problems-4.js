//recursive function to calculate the nth Fibonacci number
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(10)); 


//recursive function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));


//recursive function to find the sum of digits of a number
function sumOfDigits(n) {
    if (n < 10) {
        return n;
    }
    else {
        return n % 10 + sumOfDigits(Math.floor(n / 10));
    }
}

console.log(sumOfDigits(123));
console.log(sumOfDigits(4567));


//recursive function to reverse a string
function reverseString(str) {
    if (str.length <= 1) {
        return str;
    }
    else {
        return str.charAt(str.length - 1) + reverseString(str.substring(0, str.length - 1));
    }
}

console.log(reverseString("hello"));
console.log(reverseString("world"));


//recursive function to calculate the power of a number
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    else if (exponent === 1) {
        return base;
    }
    else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(2, 3));
console.log(power(5, 2));
