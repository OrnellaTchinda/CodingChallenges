//704. Binary Search

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

//Parameters: array and integer
//Return: integer/index

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

//PseudoCode: binary search tree to find the index of the target

// Constraints:
// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

var search = function (nums, target) {

    let min = 0;
    let max = nums.length - 1;
    let guess;

    while (min <= max) {
        guess = Math.floor((min + max) / 2)

        if (nums[guess] === target) {
            return guess
        } else {
            if (nums[guess] < target) {
                min = guess + 1
            } else {
                max = guess - 1
            }
        }

    }

    return -1;

};