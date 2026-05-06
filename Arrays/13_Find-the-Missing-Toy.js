// ==========================================
// Problem: Find the Missing Toy
// ==========================================

// Platform: Masterji | Difficulty: Easy | Tags: Array

// ------------------------------------------
// Problem Statement:
// Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, your task is to return the only number in the range that is missing from the array. This problem requires you to identify the missing number by using the available elements in the array.

// For instance, if you have an array `[3, 0, 1]` representing numbers within the range `[0, 3]`, you'd return `2` because it is the number missing from the list of numbers `0` to `3`.
// ------------------------------------------

// TEST_CASE_1
// Input:
// nums = [3, 0, 1]

// Output:
// 2

function findMissingToy(nums) {
  for (let i = 0; i <= nums.length; i++) {
    let match = false;
    for (let j = 0; j < nums.length; j++) {
      if (i === nums[j]) {
        match = true;
        break;
      }
    }
    if (!match) return i;
  }
}
