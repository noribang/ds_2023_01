// O(n) linear time complexity.
// Compare two arrays for same values and same frequency of values.

function same(arr1, arr2) {
    // Test if array lengths are unequal.
    // Return false if true.
    if (arr1.length !== arr2.length) {
        return false
    }
    // Create two empty objects to hold 
    // values and their frequencies from two arrays.
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // Populate elements and their frequencies from 
    // arr1 into frequencyCounter object. 
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    // Populate elements and their frequencies from 
    // arr2 into frequencyCounter object. 
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter[val] || 0) + 1
    }
    // Test if value (key) is in both objects.
    // Test if frequencies of values (values) are unequal in both ojects.
    for (let key in frequencyCounter1) {
        // Return false if property is not in object.
        if (!(key**2 in frequencyCounter2)) {
            return false
        }
        // Return false if frequency of values are not equal.
        if (frequencyCounter2[key**2] !== frequencyCounter1[key]) {
            return false
        }
    }
    // Return true if all test pass (i.e. false is never returned)
    return true
}



test1 = [1,2,3,4,5,3]
test2 = [9,25,16,4,1,9]
same(test1, test2)