// ==========================================
// Problem: Majority Element
// ==========================================

// Platform: Masterji | Difficulty: Easy | Tags: Array

// ------------------------------------------
// Problem Statement:
// Given an array `nums` of size `n`, return the **majority element**.

// The majority element is defined as the element that appears more than ( \\lfloor \\frac{n}{2} \\rfloor ) times. You can assume that the majority element always exists in the array.
// ------------------------------------------

// TEST_CASE_1
// Input:
// nums = [3,2,3]

// Output:
// 3

function majorityElement(nums) {
  const obj = {};

  for (const element of nums) {
    obj[element] = (obj[element] || 0) + 1;
  }

  for (const key in obj) {
    const compare = nums.length / 2;
    if (obj[key] > compare) return Number(key);
  }
}
