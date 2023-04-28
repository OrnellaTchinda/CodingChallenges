//35. Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

//P: array, integer
//R: integer/index

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

//PseudoCode: BinarySearchtree; if not found return the min value

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

var searchInsert = function (nums, target) {

    let min = 0;
    let max = nums.length - 1;
    let guess;
    if (nums[min] < target) { return 0; }
    if (nums[max] > target) { return max + 1 }

    while (min < max) {
        guess = Math.floor((min + max) / 2)

        if (nums[guess] === target) {
            return guess
        } else if (nums[guess] < target) {
            guess = min + 1
        } else {
            guess = min - 1
        }

    }

    return min

}