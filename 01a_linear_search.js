// O(n) linear time complexity.
// Requires sorted array.

// Create a function that takes an array and a value.
// Find the value in the array.
// Iterate through each element in the array starting 
// from index position 0 in the array until the value is found.
// If the value is found during iteration 
// return the index position.
// If value is not found return -1.
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Is ${arr[i]} equal to ${val}: `+ arr[i] === val)
        if (arr[i] === val) {
            return i;
        }
    }
    // If value not found return -1.
    return -1;
}

linearSearch([1,2,3,5,6,8,9,12,15,16,29], 2)