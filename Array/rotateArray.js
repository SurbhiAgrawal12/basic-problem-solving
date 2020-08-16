/*
Problem description: Given a random integer array of size n, write a function that rotates the given array
by d elements (towards left) Change in the input array itself. You don't need to return or print elements.
*/


/*
*****************************Algorithm******************************
Approach 1: 
1) store the first element of an array in a temp.
2) shift the array by 1.
3) store the temp value in lastindex of an array.

Approach 2:
1) reverse the elements of an array. [7, 6, 5,4 ,3 ,2, 1]
2) reverese the n-d elements of an array [ 3,4,5,6,7,2,1]
3) reverse the last 2(d) elements of an array [3,4,5,6,7,1,2]

*/

function swap(arr, startIndex, lastIndex) {
    let temp = arr[startIndex];
    arr[startIndex] = arr[lastIndex];
    arr[lastIndex] = temp;
}

function reverse(arr, startIndex, lastIndex){
    let i = startIndex, j = lastIndex;
    while(i<j){
        swap(arr, i , j);
        i++; j--;
    }
}

function rotateArray(arr, rotateArrayBy){
    rotateArrayBy = (rotateArrayBy > arr.length) ? rotateArrayBy%arr.length : rotateArrayBy;

    reverse(arr, 0, arr.length-1);
    reverse(arr, 0, arr.length-1-rotateArrayBy);
    reverse(arr, arr.length-rotateArrayBy, arr.length-1);

}

function rotateArrayByApproach1(arr, rotateArrayBy){
    for(let i =0; i< rotateArrayBy; i++){
        let [temp] = arr;
        arr.shift();
        arr[lastElementIndex] = temp;
    }
}


let arr = [1, 2 ,3 ,4, 5, 6, 7];
console.log("original arr :: ", arr);
let lastElementIndex = arr.length-1;
let rotateArrayBy = 2;
//rotateArrayByApproach1(arr, rotateArrayBy);
rotateArray(arr, rotateArrayBy);
console.log("After rotation :: ", arr);


