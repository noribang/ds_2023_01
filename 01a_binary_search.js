// Log(N) time complexity.
// Sorted array or sorted collection required.
function binarySearch(arr, val) {
    // Create minimum initial value as index 0.
    let min = 0;
    // Create maximum initial value as last index position.
    let max = arr.length - 1;
    // Iterate through array.
    // Use middle as mid position in subset of array.
    // Check if middle is > or < than value looking for. 
    while (min <= max) {
        // Get middle position in subset of array.
        let middle = Math.floor((min + max) / 2)
        // Get value of middle posiiton in array.
        let currentElement = arr[middle]

    }


}