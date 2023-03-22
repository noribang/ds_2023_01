// O(n) linear time complexity.
// Sorted array required.

// Search for val in collection.
function linearSearch(arr, val) {
    // Iterate through collection.
    for (let i = 0; i < arr.length; i++) {
        // Check if value at current position 
        // in collection equals val.
        // Return current position if equals val.
        let currentValue = arr[i]    
        if (currentValue === val) {
            return i
        }
    }
    // If val not found in collection
    // return -1. 
    return -1
}

linearSearch([1,2,3,5,6,8,9,12,15,16,29], 2)