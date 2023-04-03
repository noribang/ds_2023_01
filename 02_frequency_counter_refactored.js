// O(n) linear time complexity.
// Compare two arrays for same values and same frequency of values.

function same(arr1, arr2) {
    // Check length of both arrays. 
    if (arr1.length !== arr2.length) {
        return false
    }
    // Create two objects.
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // arr1 frequency of values.
    for (let val of arr1) {
        // Each value of arr1 will be key of object.
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    // arr2 frequency of values.
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    // 
    for (let key in frequencyCounter1) {
        // Text for key existence in 2nd object.
        if (!(key**2 in frequencyCounter2)) {
            return false
        }
        // Test for frequency 
        if (frequencyCounter2[key**2] !== frequencyCounter1[key]) {
            return false
        }

    }
    // Return true if all tests pass.
    return true
}



test1 = [1,2,3,4,5,3]
test2 = [9,25,16,4,1,9]
same(test1, test2)