// ==========================================
// Problem: Missing Number
// ==========================================

// Platform: Masterji | Difficulty: Easy | Tags: Array

// ------------------------------------------
// Problem Statement:
// Given an array `nums` containing `n` distinct numbers in the range (\[0, n\])
// return the only number   in the range that is missing from the array.
// ------------------------------------------

// TEST_CASE_1
// Input:
// nums = [3,0,1]

// Output:
// 2

function findMissingNumber(nums) {
  for (let i = 0; i <= nums.length; i++) {
    let flag = false;
    for (let j = 0; j < nums.length; j++) {
      if (i === nums[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) return i;
  }
  return result;
}
