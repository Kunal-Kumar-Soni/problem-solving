// ======================================================
// Problem: Remove Duplicates from Sorted Collection
// ======================================================

// Platform: Masterji | Difficulty: Easy | Tags: Array

// ------------------------------------------
// Problem Statement:
// Given a sorted integer array nums,
// remove the duplicates in-place such that
// each unique element appears only once.
//
// The relative order of elements must remain same.
//
// Return the number of unique elements.
//
// Do not create a new array.
// Modify the original array directly.
// ------------------------------------------

// TEST_CASE_1
// Input:
// nums = [1,1,2]

// Output:
// [1,2]

function removeDuplicates(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (i === nums.indexOf(num)) {
      result.push(num);
    }
  }
  return result.length;
}
