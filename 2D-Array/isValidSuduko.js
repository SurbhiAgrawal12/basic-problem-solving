/*
Que: Determine if a 9 x 9 Sudoku board is valid. 
Only the filled cells need to be validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
    
If numerator < denominator:
    numerator / denominator = 0 (quotient)
    Remainder = numerator
*/

/*
    check any duplicates present or not
    check the entire  col of a row by the value passed in function
*/
var isValidRow = (board, i, j, value) => {
  let rowResult = false;

  for (let col = 0; col < 9; col++) {
    //add the condition to leave the current  passed value, because checking all the entire col corresponding to that value;
    if (col !== j) {
      if (board[i][col] == value) {
        console.log("rowResult :: ", rowResult);
        return rowResult;
      }
    }
  }
  rowResult = true;
  console.log("rowResult :: ", rowResult);
  return rowResult;
};

/*
    check any duplicates present or not
    check the entire row of a col by the value passed in function
*/
var isValidColumn = (board, i, j, value) => {
  let colResult = false;
  for (let row = 0; row < 9; row++) {
    //add the condition to leave the current  passed value, because checking all the entire col corresponding to that value;
    if (row !== i) {
      if (board[row][j] == value) {
        return colResult;
      }
    }
  }
  colResult = true;
  console.log("colResult  :: ", colResult);
  return colResult;
};

/*
This is a illustration of a sudoku in nine 3x3 boxes with each cell represented by a two-digit number ij (i means row index and j means column index).

00 01 02 | 03 04 05 | 06 07 08
10 11 12 | 13 14 15 | 16 17 18  // i = 0, 1, 2
20 21 22 | 23 24 25 | 26 27 28
------------------------------
30 31 32 | 33 34 35 | 36 37 38
40 41 42 | 43 44 45 | 46 47 48  // i = 3, 4, 5
50 51 52 | 53 54 55 | 56 57 58
------------------------------
60 61 62 | 63 64 65 | 66 67 68 
70 71 72 | 73 74 75 | 76 77 78  // i = 6, 7, 8
80 81 82 | 83 84 85 | 86 87 88
How do we iterate using i, j, and 3(because its 3x3)?
We use / and % to help!

Because we only want to start vertical traversal when horizontal traversal is done. 

Use / for vertical traversal because
Math.floor(0 / 3) = 0
Math.floor(1 / 3) = 0
Math.floor(2 / 3) = 0

Use % for horizontal traversal beause 
0 % 3 = 0
1 % 3 = 1
2 % 3 = 2
*/

var isValidSubBoxes = (board, row, col, value) => {
  let subBoxResult = false;

  /*
 startRow      row
    0           0(0%3 = 0)  (0-0 = 0)
    0           1(1%3 = 1)  (1-1 = 0)
    0           2(2%3 = 2)  (2-2 = 0)
    3           3(3%3 = 0)  (3-0 = 3)
    3           4(4%3 = 1)  (4-1 = 3)
    3           5(5%3 = 2)  (5-2 = 3)
    6           6(6%3 = 0)  (6-0 = 6)
    6           7(7%3 = 1)  (6-1 = 6)
    6           8(8%3 = 2)  (8-2 = 6)
*/

  const startRow = row - (row % 3),
    startCol = col - (col % 3);

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (i !== row && j !== col) {
        if (board[i][j] === value) {
          console.log("subBoxResult :: ", subBoxResult);
          return subBoxResult;
        }
      }
    }
  }
  subBoxResult = true;
  console.log("subBoxResult :: ", subBoxResult);
  return subBoxResult;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let value = board[i][j];
      if (value !== ".") {
        if (
          isValidRow(board, i, j, value) &&
          isValidColumn(board, i, j, value) &&
          isValidSubBoxes(board, i, j, value)
        ) {
          return true;
        }
      }
    }
  }
  return false;
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
