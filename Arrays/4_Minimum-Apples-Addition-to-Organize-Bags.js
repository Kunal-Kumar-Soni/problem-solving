// ======================================================
// Problem: Minimum Apples Addition to Organize Bags
// ======================================================

// Platform: Masterji | Difficulty: Easy | Tags: Array

// ------------------------------------------
// Problem Statement:
// Given an integer array nums,
// return the minimum number of operations
// needed to make the array strictly increasing.
//
// In one operation, you can increment
// any element by 1.
//
// An array is strictly increasing if:
// nums[i] < nums[i + 1]
// for every valid index.
// ------------------------------------------

// TEST_CASE_1
// Input:
// nums = [2,2,2]

// Output:
// 3

function minimumOperations(nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] >= nums[i + 1]) {
      let diff = nums[i] - nums[i + 1];
      let addVal = diff === 0 ? 1 : diff + 1;
      nums[i + 1] = nums[i + 1] + addVal;
      count = count + addVal;
    }
  }
  return count;
}
