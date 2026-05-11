// ==========================================
// Problem: Toy Locker Rotation Challenge
// ==========================================

// Platform: Masterji | Difficulty: Easy | Tags: Array

// ------------------------------------------
// Problem Statement:
// Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.
// ------------------------------------------

// TEST_CASE_1
// Input:
// nums = [2,3,4,5,6,7,8]
// k = 3

// Output:
// [1, 4, 2, 0, 0, 0];

function rotateArray(nums, k) {
  for (let i = 0; i < k; i++) {
    const lastVal = nums[nums.length - 1];
    nums.pop();
    nums.unshift(lastVal);
  }
  return nums;
}
