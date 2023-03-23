// O(n^2) quadratic time complexity.
// Nested loop using indexOf.

// Compare two arrays.
// Must have same frequency of values in different order.

function same(arr1, arr2) {
    // Check if both arrays are of eqaul length.
    // Short circuit if not equal.
    if (arr1.length !== arr2.length) {
        return false;
    } 
    // Loop thru arr1
    for (let i = 0; i < arr1.length; i++) {
        let arr1Val = arr1[i]
        // Check if arr1Val exists in arr2.
        // If so remove from arr2 element from j position.
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j] === arr1Val) {
                arr2.splice(j, 1)
            }
        } 
    }
    // If arr2 is not length 0 then both arrays did not have same values.
    // Therefore, return false.
    if (arr2.length !== 0) {
        return false;
    }
    // Otherwise:
    // If arr2 is length 0 then both arrays had same values. 
    return true;
}

test1 = [1,2,3,4,8]
// test2 = [9,25,16,4,1]
test2 = [8,3,2,1,4]
same(test1, test2)