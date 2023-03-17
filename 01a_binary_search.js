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
        // If value at middle position < value looking for
        // make min +1 of current middle (move new min to right of middle).
        if (currentElement < val) {
            min =  middle + 1;
        }
        // If value at middle position > value looking for 
        // make max middle -1 (move new max to left of middle).
        else if (currentElement > val) {
            max = middle - 1
        } 
        // If middle is neither < or > value looking for 
        // it must be the value looking for.
        // Return middle position.
        else {
            return middle;
        }
    }
    // Default:
    // If value not found in array return -1.
    return -1;
}

let arrSearch = [1,2,3,6,9,12,21,28,35,46,53,63]
binarySearch(arrSearch, 46)
// binarySearch([1,2,3,4,5,6], 4)
// binarySearch([1,2,3,4,5,6], 6)
// binarySearch([1,2,3,4,5,6], 11)