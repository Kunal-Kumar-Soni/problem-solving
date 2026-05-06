// ==========================================
// Problem: Find Common Elements in Two Arrays
// ==========================================

// Platform: Masterji | Difficulty: Easy | Tags: Array

// ------------------------------------------
// Problem Statement:
// Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays, and you may return the result in any order.
// ------------------------------------------

// TEST_CASE_1
// Input:
// nums1 = [1,2,2,1], nums2 = [2,2]

// Output:
// [2,2]

function intersect(nums1, nums2) {
  const obj = {};
  const result = [];

  for (const element of nums1) {
    obj[element] = (obj[element] || 0) + 1;
  }

  for (const element of nums2) {
    if (obj[element]) {
      result.push(element);
      obj[element]--;
    }
  }
  return result;
}
