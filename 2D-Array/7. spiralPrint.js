/**
 * @param {number[][]} matrix
 * @return {number[]}
 Approach: 
 1. print firt row ( then increase the row by 1)
 2. print last column ( then decrease the column by 1)
 3. print last row ( then decrease the row by 1)
 4. print first coloumn ( then increase the column by 1)
 */
 var spiralOrder = function(matrix) {
    let arr = [];
    
    let startingRow = 0;
    let endingRow = matrix.length -1;
    let startingCol = 0;
    let endingCol = matrix[0].length - 1;
    
    let totalElements = (matrix.length)*(matrix[0].length);
    console.log("totalElements :: ", totalElements);
    let count = 0;
    
    while(count < totalElements) {
        console.log("count :: ", count);
        //print firt row
        for(let i=startingCol; count < totalElements && i<=endingCol; i++) {
            console.log(matrix[startingRow][i]);
            arr.push(matrix[startingRow][i]);
            count++;
        }
        startingRow++;
        
        //print last column
        for(let i =startingRow; count < totalElements && i<=endingRow; i++) {
            console.log(matrix[i][endingCol]);
            arr.push(matrix[i][endingCol]);
            count++;
        }
        endingCol--;
        
        //print last row
        for(let i = endingCol; count < totalElements && i >= startingCol; i--) {
            console.log(matrix[endingRow][i]);
            arr.push(matrix[endingRow][i]);
            count++;
        }
        endingRow--;
        
        //print first coloumn
        for(let i = endingRow; count < totalElements && i >= startingRow; i--) {
            console.log(matrix[i][startingCol]);
            arr.push(matrix[i][startingCol]);
            count++
        }
        startingCol++;
    }
    return arr;
    
};

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
spiralOrder(matrix);