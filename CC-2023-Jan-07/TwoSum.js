// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//P: array an integer;
//R: array and integer

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

//Create a map object;
//Add the first value of the array in the map object as a key and the index in which it is as the value
//Substract each element with the target, get check if it's the object. If not add it with its index as value.


var twoSum = function (nums, target) {
    const map2 = new Map();
    map2.set(nums[0], 0);


    for (let i = 1; i < nums.length; i++) {


        const result = target - nums[i];

        if (map2.has(result)) {
            return [map2.get(result), i]
        } else {
            map2.set(nums[i], i)
        }

    }
}

//New slt
var twoSum = function (nums, target) {
    const map1 = new Map();

    for (let i = 0; i < nums.length; i++) {
        map1.set(nums[i], i);
    }

    for (let j = 0; j < nums.length; j++) {

        const result = target - nums[j]

        if (map1.has(result) && (map1.get(result) !== j)) {
            return [j, map1.get(result)]
        }

    }

};