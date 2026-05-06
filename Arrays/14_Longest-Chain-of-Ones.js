// ==========================================
// Problem: Longest Chain of Ones
// ==========================================

// Platform: Masterji | Difficulty: Easy | Tags: Array

// ------------------------------------------
// Problem Statement:
// Given a binary array `nums`, return the maximum number of consecutive 1's in the array. The task is to determine the longest sequence of ones in the binary list, where ones represent consecutive occurrences of a certain condition.

// For instance, if you have an array `[3, 0, 1]` representing numbers within the range `[0, 3]`, you'd return `2` because it is the number missing from the list of numbers `0` to `3`.
// ------------------------------------------

// TEST_CASE_1
// Input:
// nums = [1, 0, 1, 1, 0, 1]

// Output:
// 3

function longestChainOfOnes(nums) {
  let currStreak = 0;
  let longestStreak = 0;

  for (let i = 0; i < nums.length; i++) {
    nums[i] === 1 ? currStreak++ : (currStreak = 0);
    currStreak > longestStreak && (longestStreak = currStreak);
  }
  return longestStreak;
}
