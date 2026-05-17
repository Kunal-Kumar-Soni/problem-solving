// ==========================================
// Problem: Character Decoder Challenge
// ==========================================

// Platform: Masterji | Difficulty: Easy | Tags: Array

// ------------------------------------------
// Problem Statement:
// Consider two distinct characters represented using bits:

// - The first character is represented by a single bit `0`.
// - The second character can be represented by a pair of bits (`10` or `11`).

// You are provided with a binary array called `bits` which always concludes with the bit `0`. The objective is to determine if the last character in the array must be represented by a single-bit character.
// ------------------------------------------

// TEST_CASE_1
// Input:
// bits = [1,0,0]

// Output:
// true

function isOneBitCharacter(bits) {
  let i = 0;

  while (i < bits.length - 1) {
    if (bits[i] === 1) {
      i += 2;
    } else {
      i += 1;
    }
  }
  return i === bits.length - 1;
}

console.log(isOneBitCharacter([1, 0, 0]));
