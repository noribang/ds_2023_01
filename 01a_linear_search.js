// O(n) linear time complexity.
// Requires sorted array.

// Find a value in an array.
function linearSearch(arr, val) {
    // Iterate through a collection of data.
    for (let i = 0; i < arr.length; i++) {
        let currentValue = arr[i]
        // If current value in arr is val we 
        // are looking for return i position.
        if (currentValue === val) {
            return i;
        }
    }

}


linearSearch([1,2,3,5,6,8,9,12,15,16,29], 2)