//function to generate the first n numbers in the Fibonacci sequence
function fibonacciSequence(n) {
    const sequence = [];
    let prev = 0;
    let curr = 1;
    sequence.push(prev);
    for (let i = 1; i < n; i++) {
        sequence.push(curr);
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return sequence;
}
const n = 10;
console.log("The first", n, "numbers in the Fibonacci sequence are:", fibonacciSequence(n));


//function that takes a number as input and returns the factorial of that number.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    
    return result;
}
const number = 5;
console.log("The factorial of", number, "is:", factorial(number));


//function that checks if a given string is a palindrome
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}
const testString1 = "A man, a plan, a canal, Panama";
const testString2 = "racecar";
const testString3 = "hello";

console.log(`"${testString1}" is a palindrome:`, isPalindrome(testString1));
console.log(`"${testString2}" is a palindrome:`, isPalindrome(testString2));
console.log(`"${testString3}" is a palindrome:`, isPalindrome(testString3));


//function that finds the maximum and minimum elements in an array
function findMaxAndMin(arr) {
    if (arr.length === 0) {
        return { max: null, min: null };
    }
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return { max, min };
}
const array = [5, 3, 9, 2, 11, 6];
const { max, min } = findMaxAndMin(array);
console.log("Maximum element in the array:", max);
console.log("Minimum element in the array:", min);


//write a function to check if two strings are anagrams of each other
function areAnagrams(str1, str2) {

    const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
const string1 = "listen";
const string2 = "silent";
console.log(`"${string1}" and "${string2}" are anagrams:`, areAnagrams(string1, string2));