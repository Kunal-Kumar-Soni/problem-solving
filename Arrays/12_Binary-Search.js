// ==========================================
// Problem: Binary Search
// ==========================================

// Platform: Masterji | Difficulty: Easy | Tags: Array

// ------------------------------------------
// Problem Statement:
// Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, return its index. Otherwise, return `-1`.

// You must write an algorithm with O(log n) runtime complexity.
// ------------------------------------------

// TEST_CASE_1
// Input:
// nums = [-1,0,3,5,9,12], target = 9

// Output:
// 4

function search(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  return -1;
}
