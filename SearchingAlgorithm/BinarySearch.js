/*
Problem Description: Given a sorted integer array (in ascending order) and an
element x. You need to search this element x in the given input array using
binary search. Return the index of element in the input. If element is not found in
the array, return -1.
*/

/*
*******************************Algorithm***************************
1. If middle element is equal to x, return that element’s index.
2. If middle element is less than x, we’ll do the search in the right half of the array.
3. If middle element is more than x, we’ll do the search in the left half of the array.
*/

function binarySearch(arr, elementToSearch) {
    let startIndex = 0;
    let endIndex = arr.length-1;
    
    while(startIndex <= endIndex) {

        let midIndex = Math.trunc((endIndex + startIndex)/2); // toFixed converts the num into string
        
        if(arr[midIndex] == elementToSearch) {
            return midIndex;
        }
        else if(arr[midIndex] < elementToSearch) {
            startIndex =  midIndex + 1;    
        }else{
            endIndex = midIndex-1;
        } 
    }
    
    return -1;
}


let arr = [1, 3, 7, 9, 11, 12, 45];
let elementToSearch = 0;
console.log(binarySearch(arr, elementToSearch));

