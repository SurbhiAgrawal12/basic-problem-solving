/*
Problem description : Given a random integer array. Sort this array using selection sort.
Change in the input array itself. You don't need to return or print elements.
*/


/*
*****************************Algorithm**************
The selection sort algorithm sorts an array by repeatedly finding the 
minimum element (considering ascending order) from unsorted part and putting it at the beginning. 
*/

function swap(arr, j, min, minIndex) {
    let temp = arr[j];
    arr[j] = min;
    arr[minIndex] = temp;
}

function selectionSort(arr) {

    let [min] = arr;
    for(let j=0; j<arr.length; j++){
        let min = arr[j];
        for(let i =j+1; i< arr.length; i++){
            if(arr[i] < min){
                min = arr[i];
                minIndex = i;
            }
        }
        swap(arr, j, min, minIndex)   
    }
}

let arr = [5,1,6,7,9,2,4,5,7];
selectionSort(arr);
console.log("arr :: ", arr);