/*
Problem Description: Given a random integer array, push all the zeros that are
present to the end of the array. The respective order of other elements should
remain the same.
*/

/*
**********************************Algorithm**********************************
1) So let’s use a two pointer approach to solve this problem. We’ll maintain two pointers,
‘current’ and ‘nonZeroPos’.
2) Both pointers will be initialised with 0.
3) 
*/
function swap(arr, currentPointer, zeroPointer) {
    let temp = arr[currentPointer];
    arr[currentPointer] = arr[zeroPointer];
    arr[zeroPointer] = temp;
}

function pushZerosToEnd(arr) {
    let zeroPointer = arr.length-1;
    let currentPointer =0;

    for(;currentPointer < zeroPointer; ){
        if(arr[currentPointer] == 0 && arr[zeroPointer] != 0){
            swap(arr, currentPointer, zeroPointer);
            currentPointer++; zeroPointer--

        }
        else if(arr[currentPointer] == 0 && arr[zeroPointer] == 0){
            zeroPointer--;
        }
        else if(arr[currentPointer] != 0){
            currentPointer++;
        }
    }
}


let arr = [2, 0, 4, 1, 3, 0, 0];
console.log("original arr :: ", arr);
pushZerosToEnd(arr);
console.log("final array ::",arr);