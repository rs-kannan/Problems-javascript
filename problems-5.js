// Linear search function
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element if found
        }
    }
    return -1; // Return -1 if the target element is not found in the array
}

// Example usage for linear search:
const linearArray = [5, 3, 10, 6, 2, 8];
const linearTargetElement = 10;
const linearResultIndex = linearSearch(linearArray, linearTargetElement);
if (linearResultIndex !== -1) {
    console.log(`Element ${linearTargetElement} found at index ${linearResultIndex}.`);
} else {
    console.log(`Element ${linearTargetElement} not found in the array.`);
}

// Binary search function
function binarySearch(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        // Check if target is present at mid
        if (sortedArr[mid] === target) {
            return mid;
        }
        
        // If target is greater, ignore left half
        if (sortedArr[mid] < target) {
            left = mid + 1;
        } 
        // If target is smaller, ignore right half
        else {
            right = mid - 1;
        }
    }

    // If we reach here, then the element was not present in the array
    return -1;
}

// Example usage for binary search:
const sortedArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const binaryTargetElement = 12;
const binaryResultIndex = binarySearch(sortedArray, binaryTargetElement);
if (binaryResultIndex !== -1) {
    console.log(`Element ${binaryTargetElement} found at index ${binaryResultIndex}.`);
} else {
    console.log(`Element ${binaryTargetElement} not found in the array.`);
}
