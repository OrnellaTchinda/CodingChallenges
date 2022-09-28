//Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums

//P: an array
//E:Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

//R: an array

//Pseudo-code= Create an empty array loop through the array depending on his length and push missing value to the empty array

var findDisappearedNumbers = function (nums) {
    var disa = []
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            disa.push(i)
        }
    }
    return disa
};