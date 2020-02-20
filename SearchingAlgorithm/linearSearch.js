/*
Problem: Given an array arr[] of n elements, write a function to search a given element x in arr[].
*/

function linearsearch(arr, elementToSearch) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === elementToSearch){
            return i;
        }
    }
    return -1;
}

let arr = [1, 3, 7, 9, 11, 12, 45];
let elementToSearch = 11;
console.log(linearsearch(arr, elementToSearch));
