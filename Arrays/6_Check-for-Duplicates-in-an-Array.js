// ==========================================
// Problem: Check for Duplicates in an Array
// ==========================================

// Platform: Masterji | Difficulty: Easy | Tags: Array

// ------------------------------------------
// Problem Statement:
// Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.
// ------------------------------------------

// TEST_CASE_1
// Input:
// nums = [1,2,3,1]

// Output:
// true

function containsDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}
