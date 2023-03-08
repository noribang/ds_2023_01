// Log(N) time complexity.
function binarySearch(arr, val) {

    let min = 0
    let max = arr.length - 1

    while(min <= max) {
        // Find middle element.
        // Math.floor() rounds down.
        let middle = Math.floor((min + max) / 2)
        // Get the middle element of array.
        let currentElement = arr[middle]
        // If value at middle element is less than val looking for 
        // increase middle by 1 and assign as min.
        if (arr[middle] < val) {
            min = middle + 1;
        // If value at middle element is greater than val looking for
        // decrease middle by 1 and assign to max
        } else if (arr[middle] > val) {
            max = middle - 1;
        // If middle is neither less than nor greater than val 
        // looking for, it must be the val we are looking for.
        // Return middle; 
        } else {
            return middle;
        }

    }
}


let arrSearch = [1,2,3,6,9,12,21,28,35,46,53,63]
binarySearch(arrSearch, 46)
// binarySearch([1,2,3,4,5,6], 4)
// binarySearch([1,2,3,4,5,6], 6)
// binarySearch([1,2,3,4,5,6], 11)

