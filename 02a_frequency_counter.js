// O(n^2) quadratic time complexity because of nested loop
// Check if two collections have same values 
// and same frequency of values. 

// Take in two collections.
// Check if two collections are not of equal length.
// If not equal length short circuit and return false. 
// If equal length loop through both collections.

// Loop through arr1. Start from 0 until end of array.
// Assign each value in array to variable arr1Val.
// Nested loop thru arr2.
// Check if each value in arr2 is equal to arr1.
// If arr1Val equals arr2[j] remove that value position from arr2.

// At end of nested loop check if arr2 is length 0.
// If arr2 length does not equal 0 return false.
function same(arr1, arr2) {

} 



test1 = [1,2,3,4,8]
// test2 = [9,25,16,4,1]
test2 = [8,3,2,1,4]
same(test1, test2)