// ==========================================
// Problem: Marble Value Doubling Game
// ==========================================

// Platform: Masterji | Difficulty: Easy | Tags: Array

// ------------------------------------------
// Problem Statement:
// You are given a 0-indexed array `nums` of size `n` consisting of non-negative integers.

// You need to perform `n - 1` operations on this array where, in the `i-th` operation (0-indexed), you will apply the following on the `i-th` element of `nums`:

// - If `nums[i] == nums[i + 1]`, then multiply `nums[i]` by 2 and set `nums[i + 1]` to 0. Else, skip this operation.

// After performing all operations, shift all the 0's to the end of the array.
// ------------------------------------------

// TEST_CASE_1
// Input:
// nums = [1, 2, 2, 1, 1, 0]

// Output:
// [1, 4, 2, 0, 0, 0];

function marbleValueDoublingGame(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }
  }

  const filterVal = nums.filter((el) => el > 0);
  const zeroLength = nums.length - filterVal.length;
  const zeroArr = Array(zeroLength).fill(0);
  return filterVal.concat(zeroArr);
}
