
/*
Problem Description: You are given an integer array A that contains only integers 0
and 1. Write a function to sort this array. Find a solution which scans the array
only once. Don't use extra array.
*/

/*
**************Algorithm****************
1) Let’s use two pointers. 
2) One that iterates through the array (current element pointer)
3) and one that decides the next location for a 0 (zer element pointer)
4) Start iterating through the array. If we encounter a 1, we’ll do nothing. Just
increase ‘current’ by 1
5) If we counter a 0, we need to push this zero to the front of the array.
                swap(arr[zeroPos], arr[current]) . 
6) And then we increment ‘current’ by 1 and increment ‘zeroPos’ by 1 too
*/

//***************** Psedo Code *********************

function swap(arr, current , zeroPos) {
    let temp = arr[current];
    arr[current] = arr[zeroPos];
    arr[zeroPos] = temp;
}

function sort01(arr) {
    
    let zeroPos = 0;
    let current = 0;

    while(current < arr.length) {

        if(arr[current] == 0) {
            swap(arr, current , zeroPos);
            zeroPos = zeroPos + 1;
        }
        
        current = current + 1;
    
    }
    
}

let arr = [0, 1, 1, 0, 1, 0, 0, 1, 0, 0];
console.log("original array :: ", arr);
sort01(arr);
console.log("sort01 :: ", arr);