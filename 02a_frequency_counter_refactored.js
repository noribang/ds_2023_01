// O(n) linear time complexity.
// Compare two arrays for same values and same frequency of values.

function same(arr1, arr2) {
    // Check if both arrays are not equal lengths.
    // If not equal lengths return false.
    if (arr1.length !== arr2.length) {
        return false
    }
    // Initialize two variables as empty objects.
    // These objects will store values and their frequencies.
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // Store values and their frequencies of arr1 in object.
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    // Store values and their frequencies of arr2 in object.
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    // Test for key**2 and key and their corresponding values 
    // in both objects.
    for (let key in frequencyCounter1) {
        // Test if key from 1st object is key**2 in 2nd object.
        if (!(key**2 in frequencyCounter2)) {
            return false
        }
        // Test if values are not equal for key**2 in 2nd object
        // as values for key in 1st object.
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