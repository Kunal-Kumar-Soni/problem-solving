// ==========================================
// Problem: Relative Ranks
// ==========================================

// Platform: Masterji | Difficulty: Easy | Tags: Array

// ------------------------------------------
// Problem Statement:
// You are given an integer array `score` of size `n`, where `score[i]` is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

// The athletes are ranked based on their scores, with the highest score receiving the 1st place, the second highest receiving the 2nd place, and so on.

// The ranks are assigned as follows:

// - The 1st place athlete receives a "Gold Medal".
// - The 2nd place athlete receives a "Silver Medal".
// - The 3rd place athlete receives a "Bronze Medal".
// - From the 4th place to the nth place, each athlete receives their respective placement number (i.e., the xth place athlete's rank is "x").

// Return an array `answer` of size `n` where `answer[i]` is the rank of the ith athlete.
// ------------------------------------------

// TEST_CASE_1
// Input:
// nums = [8, 1, 5, 3, 2]

// Output:
// ["Gold Medal", "5", "Silver Medal", "Bronze Medal", "4"]

function findRelativeRanks(score) {
  const sortedArr = [...score].sort((a, b) => b - a);
  const result = [...score];

  for (let i = 0; i < sortedArr.length; i++) {
    const value = sortedArr[i];
    const index = score.indexOf(value);

    switch (i) {
      case 0:
        result.splice(index, 1, "Gold Medal");
        break;
      case 1:
        result.splice(index, 1, "Silver Medal");
        break;
      case 2:
        result.splice(index, 1, "Bronze Medal");
        break;
      default:
        result.splice(index, 1, `${i + 1}`);
        break;
    }
  }

  return result;
}
