// ==========================================
// Problem: Find Duplicates in Array
// ==========================================

// Platform: Masterji | Difficulty: Easy | Tags: Array

// ------------------------------------------
// Problem Statement:
// Given an integer array `nums`, your task is to determine whether there is any integer that appears at least twice in the array. If such a value exists, return `true`; otherwise, return `false` if every element in the array is distinct.
// ------------------------------------------

// TEST_CASE_1
// Input:
// nums = [1,2,3,1]

// Output:
// true

function hasDuplicates(nums) {
  const obj = {};
  for (const element of nums) {
    obj[element] = (obj[element] || 0) + 1;
  }

  for (const key in obj) {
    if (obj[key] > 1) return true;
  }

  return false;
}
