// O(n) time complexity.
// Need sorted array.
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        // If element at i position equals val return i.
        if (arr[i] === val) {
            return i;
        }
    }
    // If val does not exist in arr return -1.
    return -1;
}


let arrSearch = [1,2,3,6,9,12,21,28,35,46,53,63]
linearSearch(arrSearch, 46)