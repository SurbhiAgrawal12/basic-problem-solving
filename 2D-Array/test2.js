// Write a function that takes in an n× m two-dimensional array 
//(that can be square-shaped when n == m) and returns a
// one-dimensional array of all the array's elements in spiral order.
// Spiral order starts at the to by left corner of the two-dimensional array, 
//goes to the right, and proceeds in a spiral
// pattern all the way until every element has been visited.

let input =  [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
  ]
  
//   output => [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    
    let startingRow = 0;
    let startingCol = 0;
    let endingCol = input[0].length - 1; //4
    let endingRow =  input.length -1;
    let lastColIndex = 1;

    let count = 0;
    let output = [];
    let total = 16 //(input.length) * (input[0].length);

  while(count < total) {
            //print column of 1st row
        for(let i = startingCol; i <= endingCol && count < total; i++) {
            output.push(input[startingRow][i]);
            count++;
        }
        startingRow++;

        //print every element of last col
        for(let i = startingRow; i<= endingRow && count < total; i++) {
            endingCol = input[i].length - lastColIndex;
            output.push(input[i][endingCol]);
            count++;
        }
        // endingCol = input[endingRow].length -2;
        
        endingCol =  endingCol - lastColIndex;
        lastColIndex++;


        //print every element of last row
        for(let i = endingCol; i >= startingCol && count < total; i--) {
            output.push(input[endingRow][i]);
            count++;
        }
        endingRow--;
        console.log("endingRow :: ", endingRow);
        console.log("startingCol :: ", startingCol);
        //print every element of first col
        for(let i = endingRow; i >= startingRow && count < total; i--) {
            
            output.push(input[i][startingCol]);
            count++;
        }
        startingCol++;
  }
  
  console.log("output :: ", output);