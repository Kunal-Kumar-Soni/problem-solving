// ==========================================
// Problem: Find the Unique Number in the Array
// ==========================================

// Platform: Masterji | Difficulty: Easy | Tags: Array

// ------------------------------------------
// Problem Statement:
// You have a set of integers, which originally contains all the numbers from 1 to n. Unfortunately, due to an error, one of the numbers in the set got duplicated, resulting in a repetition of one number and the omission of another.

// You are given an integer array `nums` representing the current state of this set after the error.

// Your task is to find the number that occurs twice and the number that is missing, and return them in the form of an array.
// ------------------------------------------

// TEST_CASE_1
// Input:
// nums = [1,2,2,4]

// Output:
// [2,3]

function findErrorNums(nums) {
  let obj = {};
  let duplicate;
  let missing;
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    obj[value] = (obj[value] || 0) + 1;
  }

  for (let j = 1; j <= nums.length; j++) {
    if (obj[j] > 1) {
      duplicate = j;
    }
    if (!obj[j]) {
      missing = j;
    }
  }
  return [duplicate, missing];
}
