// O(n^2) quadratic time complexity.
// Nested loops.

// Test if two collections have the same 
// values and same frequency of values.
function same(arr1, arr2) {
    // Check if collections are not equal length.
    if (arr1.length !== arr2.length) {
        return false;
    }
    // Loop through arr1.
    for (let i = 0; i < arr1.length; i++) {
        let arr1Val = arr1[i]
        // Loop through arr2. Check each element to arr1Val.
        for (let j = 0; j < arr2.length; j++) {
            // If arr2[j] equal to arr1Val.
            // Remove arr2[j] from arr2.
            if (arr1Val === arr2[j]) {
                arr2.splice(j, 1)
            }
        }
    }
    // If after looping through both arrays
    // arr2 should be empty. Meaning arr2.length equal 0.
    // If arr2.length is not equal 0 then 
    // both arrays do not have the same values and frequencies.
    // Return false.
    if (arr2.length !== 0 ) {
        return false;
    }
    // Default:
    // Return true. arr2.length equals 0.
    // Both arrays have same values and frequencies of values.
    return true;
}

test1 = [1,2,3,4,8]
// test2 = [9,25,16,4,1]
test2 = [8,3,2,1,4]
same(test1, test2)