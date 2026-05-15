// ==========================================
// Problem: Matrix Reshaping
// ==========================================

// Platform: Masterji | Difficulty: Easy | Tags: Array

// ------------------------------------------
// Problem Statement:
// You are given an m x n matrix `mat` and two integers `r` and `c` representing the number of rows and the number of columns of the desired reshaped matrix.

// The task is to reshape the `m x n` matrix into a new one with dimensions `r x c` while preserving the order of elements in row-traversing order as in the original matrix.

// If the reshape operation is feasible given the parameters `r` and `c`, return the new reshaped matrix. If not, output the original matrix.
// ------------------------------------------

// TEST_CASE_1
// Input:
// head = [[1,2],[3,4]]
// r = 1
// c = 4

// Output:
// [[1,2,3,4]]

function matrixReshape(mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;

  if (m * n !== r * c) return mat;

  const flatArray = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      flatArray.push(mat[i][j]);
    }
  }

  const result = [];
  let k = 0;
  for (let x = 0; x < r; x++) {
    const row = [];
    for (let y = 0; y < c; y++) {
      row.push(flatArray[k]);
      k++;
    }
    result.push(row);
  }
  return result;
}
