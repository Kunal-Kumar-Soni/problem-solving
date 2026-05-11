// ==========================================
// Problem: Basic Linked List Operations
// ==========================================

// Platform: Masterji | Difficulty: Easy | Tags: Array

// ------------------------------------------
// Problem Statement:
// Given a singly linked list represented as an array and an integer `val`, insert the value `val` into the linked list at a specified position. If the position is greater than the length of the linked list, append the value to the end. Return the linked list as an array after the insertion.
// ------------------------------------------

// TEST_CASE_1
// Input:
// head = [1,2,4]
// pos = 2
// val = 3

// Output:
// [1, 4, 2, 0, 0, 0];

function insertIntoList(head, pos, val) {
  if (head.length <= pos) {
    head.splice(head.length, 0, val);
  } else {
    head.splice(pos, 0, val);
  }
  return head;
}
