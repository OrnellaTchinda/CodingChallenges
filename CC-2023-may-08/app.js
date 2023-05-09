// 283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

//P: array
//R: array (same array)

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

//P: have a pointer
//loop through the array and swap with the pointer when the element is not a 0

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

var moveZeroes = function (nums) {

    let ind = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            [nums[i], nums[ind]] = [nums[ind], nums[i]];
            ind++
        }
    }

};