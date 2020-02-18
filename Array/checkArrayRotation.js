/*
Problem description: Given an integer array, which is sorted (in increasing order)
and has been rotated by some number k in clockwise direction. Find and return the k.
*/

function checkArrayRotation(arr) {
    
    for(let i =0; i< arr.length; i++){
        if(arr[i] > arr[i+1]){
            return i;
        }
    }
    return 0;
}


let arr = [8, 9, 10, 3,6];
console.log(" Array has been rotate by :: ", checkArrayRotation(arr));

