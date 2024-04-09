// function to check if a given number is prime
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
const num = 17;
if (isPrime(num)) {
    console.log(num + ' is a prime number.');
} else {
    console.log(num + ' is not a prime number.');
}

//function to find the largest element in an array
function findLargestElement(arr) {
    if (arr.length === 0) {
        return null;
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
const array = [5, 3, 9, 2, 11, 6];
const largestElement = findLargestElement(array);
console.log("The largest element in the array is:", largestElement);


//function to find the second largest element in an array
function findSecondLargestElement(arr) {
    if (arr.length < 2) {
        return null;
    }

    let largest = arr[0];
    let secondLargest = arr[1];
    if (secondLargest > largest) {
        [largest, secondLargest] = [secondLargest, largest];
    }
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
const arr = [5, 3, 9, 2, 11, 6];
const secondLargestElement = findSecondLargestElement(array);
console.log("The second largest element in the array is:", secondLargestElement);

//function to find the nth Fibonacci number using iteration
function fibonacciIterative(n) {
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}
const n = 7;
console.log("The " + n + "th Fibonacci number is:", fibonacciIterative(n));


//function to calculate the factorial of a number using iteration
function factorialIterative(n) {
    if (n === 0) {
        return 1;
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    return factorial;
}
const num1 = 5;
console.log("The factorial of", num1, "is:", factorialIterative(num1));