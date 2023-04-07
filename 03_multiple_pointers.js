// O(n^2) time complexity.
// O(1) space complexity.
// Need sorted array.
// Find first two values in array that sum zero.
// e.g. [-4,-3,-2,-1,0,1,2,5] 

function sumZero(arr) {
    // First pointer starts at 0.
    // Iterate through arr.
    for (let i = 0; i < arr.length; i++) {
        // Second pointer starts at i + 1.
        for (let j = i + 1; j < arr.length; j++) {
            // Test if first pointer and second pointer 
            // sum to 0.
            // If true return array with two pointers.
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
    // Return false two pointer never sum to zero.
    return false
}

sumZero([-4,-3,-2,-1,0,1,2,5])