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

}



test1 = [1,2,3,4,5,3]
test2 = [9,25,16,4,1,9]
same(test1, test2)