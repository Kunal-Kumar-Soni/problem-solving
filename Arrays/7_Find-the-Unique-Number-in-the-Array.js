// ==========================================
// Problem: Find the Unique Number in the Array
// ==========================================

// Platform: Masterji | Difficulty: Easy | Tags: Array

// ------------------------------------------
// Problem Statement:
// Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// ------------------------------------------

// TEST_CASE_1
// Input:
// nums = [1,2,1,3,2]

// Output:
// 3

function findUniqueNumber(nums) {
  let obj = {};

  for (const element of nums) {
    obj[element] = (obj[element] || 0) + 1;
  }

  for (const key in obj) {
    if (obj[key] === 1) {
      return Number(key);
    }
  }
}
