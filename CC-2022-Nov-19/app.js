// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
    // an array
    //boolean 
    nums = nums.sort((a,b)=>a-b);
    for(let i=0; i<nums.length; i++){
        if(nums[i] === nums[i+1]){
            return true
        }
    }
    return false
    
 };