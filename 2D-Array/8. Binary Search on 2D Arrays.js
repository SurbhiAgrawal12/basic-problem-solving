/** Search an element in a matrix
 * all of the rows are in sorted order
 * all of the coloumns are in sorted order
 *
 * BruteForce approach: use two for loops,
 *  outer one will traverse all of the rows
 *  inner one will traverse all of the coloumns of a row.
 *  then check arr[i][j] == element return true else false
 * TC = O(n*m)
 *
 * Note: here it is mentioned that array elements are in sorted order.
 * so, in 1D array we use Binary search on sorted order array
 *
 * But now in 2D array will discuss on the basis of four corners:
 * Given:
 *      1. all of the rows are in sorted order
 *      2. all of the coloumns are in sorted order
 * so, that means,
 *       arr[0][0]     is shortest element and
 *       arr[n-1][n-1] is largest element
 *
 * now,
 * if(element == a[0][0]) => return true
 * if(element < a[0][0]) => then return false(cos a[0][0] is the smallest element, and if the element is smaller than a[0][0], it cannot be in matrix)
 *
 * if(element == a[n-1][n-1]) => return true
 * if(element > a[n-1][n-1]) => then return false(cos a[n-1][n-1] is the largest element, and if the element is larger than a[n-1][n-1], it cannot be in matrix)
 *
 * if(element > a[0][0]), we have two directions,
 *      traverse towards right
 *      traverse towards down
 *
 * if(element < a[n-1][n-1]), we have two directions,
 *      traverse towards left
 *      traverse towards up
 *
 * now will decide the direction on  the basis of other two corners:
 * if(element < a[0][n-1])
 *      traverse 1 block left (col--)
 * if(element > a[0][n-1])
 *      traverse 1 block down ( row++)
 * if(element < a[n-1][0])
 *      traverse 1 block up ( row--)
 * if(element > a[n-1][0])
 *      traverse 1 block right ( col++)
 *
 * TC = O(n+m)
 */

// Binary Search on sorted 2D array
function findAns(arr, target) {
  var row = 0;
  var col = arr[row].length - 1;
  while (row < arr.length && col >= 0) {
    if (arr[row][col] == target) {
      return [row, col];
    }

    // Target lies in further row
    if (arr[row][col] < target) {
      row++;
    }

    // Target lies in previous column
    else {
      col--;
    }
  }
  return [-1, -1];
}

// Driver Code
// Binary search in sorted matrix
var arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
var ans = findAns(arr, 12);
console.log("Element found at index: " + ans);
