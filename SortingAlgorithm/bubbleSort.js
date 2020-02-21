/*
Problem Description : Given a random integer array. Sort this array using bubble sort.
Change in the input array itself. You don't need to return or print elements.
*/

/*
************************ Algorithm************************
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping 
the adjacent elements if they are in wrong order.

*/


function bubbleSort(arr) {
    for(let i = 0; i< arr.length; i++){
        for(let j =0; j < arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

let arr = [5,1,6,7,9,2,4,5,7];
bubbleSort(arr);
console.log("arr :: ", arr);