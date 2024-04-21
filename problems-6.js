// Bubble sort algorithm
function bubbleSort(arr) {
    const length = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

// Example usage for bubble sort:
const bubbleSortArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array for bubble sort:", bubbleSortArray);
console.log("Sorted array using bubble sort:", bubbleSort(bubbleSortArray));


// Selection sort algorithm
function selectionSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            // Swap elements
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

// Example usage for selection sort:
const selectionSortArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array for selection sort:", selectionSortArray);
console.log("Sorted array using selection sort:", selectionSort(selectionSortArray));


// Insertion sort algorithm
function insertionSort(arr) {
    const length = arr.length;
    for (let i = 1; i < length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

// Example usage for insertion sort:
const insertionSortArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array for insertion sort:", insertionSortArray);
console.log("Sorted array using insertion sort:", insertionSort(insertionSortArray));


// Merge sort algorithm
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array with 0 or 1 element is already sorted
    }

    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    const sortedLeftHalf = mergeSort(leftHalf);
    const sortedRightHalf = mergeSort(rightHalf);

    return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage for merge sort:
const mergeSortArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array for merge sort:", mergeSortArray);
console.log("Sorted array using merge sort:", mergeSort(mergeSortArray));


// Quick sort algorithm
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array with 0 or 1 element is already sorted
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage for quick sort:
const quickSortArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array for quick sort:", quickSortArray);
console.log("Sorted array using quick sort:", quickSort(quickSortArray));
