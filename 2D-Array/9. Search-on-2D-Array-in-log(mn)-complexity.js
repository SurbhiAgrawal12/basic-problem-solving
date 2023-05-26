let arr = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

/**
 * here, we can see array is in sorted order, so to search an element will use binary search
 * to reduce the time complexity
 *
 * convert this 2d array into 1D arr, it would look like:
 * let arr =  [  1,   3,   5,   7,   10,  11,  16,  20,  23,  30,   34,   60];
 * index   =>    0    1    2    3    4    5    6    7    8    9     10    11
 *  row    =>    0/4  1/4  2/4  3/4  4/4  5/4  6/4  7/4  8/4  9/4   10/4  11/4
 *  row    =>    0    0    0    0    1    1    1    1    2    2     2     2
 * coloumn =>    0%4  1%4  2%4  3%4  4%4  5%4  6%4  7%4  8%4  9%4   10%4  11%4
 * coloumn =>    0    1    2    3    0    1    2    3    0    1     2     3
 * 
 * 
 *agar hum dhyaan se dekhe to 1D array me humne phle 4 coloumns ko likha fir humne 
next 4 columns ko 2D array me 0 se start kra diya that is repeat kr diya. so, we know % hume iska value de deta h

 * now this is sorted arr:
 * start = 0; end = rowLength*columnLength-1
 * mid = Math.floor((s+e)/2) => Math.floor((e-s)/2 + s)
 * if(target == mid) {
 *      return mid;
 * }
 * if(target> mid){
 *      end = mid-1;
 * }
 * if(target > mid){
 *      start = mid+1;
 * }
 */
const searchmatrix = (arr, target) => {
  let row = arr.length;
  let coloumn = arr[0].length;

  let start = 0;
  let end = row * coloumn - 1;
  let mid = Math.floor((e - s) / 2 + s);

  while (start <= end) {
    let midElement = arr[mid / coloumn][mid % coloumn];
    if (target == midElement) {
      return true;
    }
    if (target < midElement) {
      end = mid - 1;
    }
    if (target > midElement) {
      start = mid + 1;
    }
    mid = Math.floor((e - s) / 2 + s);
  }
  return false;
};
