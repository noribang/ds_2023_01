// O(log n) logarithmic time complexity.
// Sorted collection needed.

function binarySearch(arr, val) {
    // Initial Min position in collection is 0.
    let min = 0
    // Initial Max position in collection is arr.length - 1.
    let max = arr.length - 1
    // Iterate through collection while min <= max. 
    while (min <= max) {
        // Calcluate middle position.
        let middle = Math.floor((min + max) / 2)
        // Middle position value in collection.
        // let currentElement = arr[middle]

        // If middle value < what looking for 
        // Make min = middle + 1. (Move min to right of middle.)
        if (arr[middle] < val) {
            min = middle + 1
        }
        // If middle value > than what looking for
        // move max to middle -1. (Move max to left of middle.)
        else if (arr[middle] > val) {
            max = middle - 1
        }
        // If middle is neither < nor > than what looking for
        // than it must be the val looking for.
        // Return middle position.
        else {
            return middle
        }
    }
    // Default.
    // If val not found in collection
    // than return -1.
    return -1
}

let arrSearch = [1,2,3,6,9,12,21,28,35,46,53,63]
binarySearch(arrSearch, 46)
// binarySearch([1,2,3,4,5,6], 4)
// binarySearch([1,2,3,4,5,6], 6)
// binarySearch([1,2,3,4,5,6], 11)