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

}

test1 = [1,2,3,4,8]
// test2 = [9,25,16,4,1]
test2 = [8,3,2,1,4]
same(test1, test2)