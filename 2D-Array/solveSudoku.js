//Use 2d array and backtracking
//(to remove the  element assignment if sudoku hasn't been solve)
// and recurssion to solve the sudoku


var solveSudoku = function(board) {

    solve(board);
    
};

/*
{
    * return true/false

}
*/

const solve = (board) => {
    for(let i =  0; i<board.length; i++) {
        for(let j = 0; j< board[0].length; j++) {

            if(board[i][j] ==".") {
                for(let num = 1; num <=9; num++) {
                    if(isValidSudoku(board, i, j, num)) {
                        board[i][j] = num;

                        if(solve(board) == true) {
                            return true;
                        }else {
                            board[i][j] = ".";
                        }
                    }
                }
                return false;//agar humne 1, 9 tak sab traverse kar liye.. and ek bhi value k liye k true nahi hai toh solution is not possible.. that's why writting return false.
            }
        }
    }
    return true;
}

const isValidSudoku = (board, row, col, num) => {
    for(let c = 0; c < 9; c++) {
        if(board[row][c] == num) {
            return false;
        }

        if(board[c][col] == num) {
            return false;
        }

        if(board[3 * (row/3) + c/3][3* (col/3) + c%3] == num) {
            return false;
        }
    }
    return true;
}