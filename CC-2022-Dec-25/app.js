// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space.

var singleNonDuplicate = function (nums) {
    //check if the element before and after is the same if yes continue, else return the element

    if (nums[0] !== nums[1]) {
        return nums[0];
    }

    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] === nums[0] || nums[i] === nums[i + 1]) {
            continue
        } else {
            return nums[i]
        }
    }

    return nums[nums.length - 1]

};

var singleNonDuplicate = function (nums) {
    //easy solution


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] || nums[i] === nums[i + 1]) {
            continue
        } else {
            return nums[i]
        }

    }

};