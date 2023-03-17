// Log(N) time complexity.
// Requires sorted array or collection.

// Loop through array to find value.
// Each iteration of array will cut in 
// half the part of the array being looked at. 
// Create variables for min position in 
// array and max position in array.

function binarySearch(arr, val) {
    // Initial Min position.
    let min = 0
    // Initial Max position.
    let max = arr.length - 1
    // Keep looping while min is 
    // stiil less than or equal to max.
    while (min <= max) {
        // Get middle position in array.
        let middle = Math.floor((min + max) / 2)
        // Get value at middle position in array.
        let currentElement = arr[middle]
        // 
        if (currentValue < val) {
            min = middle + 1
        }
        // 
        else if (currentValue > val) {
            max = middle - 1
        }
        // 
        else {
            return middle;
        }
    }
    // If value not found return -1.
    return -1;

}


let arrSearch = [1,2,3,6,9,12,21,28,35,46,53,63]
binarySearch(arrSearch, 46)
// binarySearch([1,2,3,4,5,6], 4)
// binarySearch([1,2,3,4,5,6], 6)
// binarySearch([1,2,3,4,5,6], 11)