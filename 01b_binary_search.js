// Log(n) time complexity.
// Sorted array necessary.
function binarySearch(arr, val) {
    // Variable for min value. Initial value at index 0.
    let min = 0;
    // Variable for max value. Initial value at last index of array.
    let max = arr.length - 1;
    // Loop through array. Keep halving subset of array.
    while(min <= max) {
        // Calculate middle element in array.
        // Use Math.floor() to round down.
        let middle = Math.floor((min + max) / 2)
        // Access value of middle element of array
        // Call it currentElement.
        let currentElement = arr[middle] 
        // If currentElement is less than val looking for
        // increase middle by 1 and assign to min.
        // Then middle will be re-calculated. 
        if (currentElement < val) {
            min = middle + 1;
        }
        // If currentElement is greater than val looking for
        // decrease middle by 1 and assign to max.
        else if (currentElement > val) {
            max = middle - 1;
        }
        // If currentElement is neither less than nor greater than 
        // val looking for, it must be the val we are looking for.
        // Return middle which is the index position.
        else {
            return middle;
        }
    }
    // If val cannot be found in array return -1.
    return -1;
}

let arrSearch = [1,2,3,6,9,12,21,28,35,46,53,63]
binarySearch(arrSearch, 46)
// binarySearch([1,2,3,4,5,6], 4)
// binarySearch([1,2,3,4,5,6], 6)
// binarySearch([1,2,3,4,5,6], 11)