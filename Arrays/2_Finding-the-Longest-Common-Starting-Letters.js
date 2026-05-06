// ==========================================
// Problem: Longest Common Starting Letters
// ==========================================

// Platform: Masterji | Difficulty: Easy | Tags: Array

// ------------------------------------------
// Problem Statement:
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string `""`.
// ------------------------------------------

// TEST_CASE_1
// Input:
// nums = ["windtalker","windy","wind"]

// Output:
// wind

function longestCommonPrefix(strs) {
  let firstWord = strs[0];
  let result = "";
  for (let i = 0; i < firstWord.length; i++) {
    let firstCharOfFirstWord = firstWord[i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== firstCharOfFirstWord) return result;
    }
    result += firstCharOfFirstWord;
  }
  return result;
}
