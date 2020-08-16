// SORT The array using quick Sort Algorithm.

// Quick sort algorithm - is Divide and Conquer Algorithm
// It picks an element as pivot and partitions the given array around the picked pivot. 

// There are many different versions of quickSort that pick pivot in different ways.
// 1. Always pick first element as pivot.
// 2. Always pick last element as pivot (implemented below)
// 3. Pick a random element as pivot.
// 4. Pick median as pivot.

// Steps to be followed:
// 1. pick the pivot Element.
// 2. Put the pivot element at its correct position in an Array.
// 3. Put all the smaller elements befor the pivot index. (smaller than pivot)
// 4. Put all the greater elements after the pivot index. (greater than pivot)

//Pseudo Code: 
// 1. Will create one function called partioning: 
//     a. will pick one pivot. 
//     b. will count number of elements less than pivot.
//     c. pivot_index will be start_index + count of smaller elements.
//     d. put the pivot element at calculated pivotindex.
//     e. sort the array around pivot element. 
//     f. This function will return pivot_index.
// 2. will create mainFunction ie Quicksort().
//    a. This will be a recursive function.
//    b. Base case will be start_index >= end_index
//    c. call partition function, it will return pivot index.
//    d. recursive call quicksort from start_index to pivot_index -1;
//    e. recursive call quicksort() from pivot_index to end.


// Summary:
// 1. partition array will only helps to place pivot at its correct Position. 
// 2. We are sorting array around pivot so that for next iteration we will traverse the reduced length of array. 

//Code:

class QuickSort {
    constructor(arr, startIndex, endIndex) {
        this.arr = arr;
        this.startIndex = startIndex;
        this.endIndex = endIndex;
    }

    swap(pivotIndex, startIndex) {
        let temp = this.arr[pivotIndex];
        this.arr[pivotIndex] = this.arr[startIndex];
        this.arr[startIndex] = temp;
    }
    
    partioning(startIndex, endIndex) {
        let countNumberOfSmallerElements = 0;
        //1. choose pivot
        let pivot = this.arr[startIndex]; // pivot will be the first element of array

        //2. count smaller elements than pivot, we are sorting in acsending order
        for(let i = startIndex+1; i <= endIndex; i++) {
            if(arr[i] < pivot) {
                countNumberOfSmallerElements++;
            }
        }
        //3. calculate pivot index
        let pivotIndex = startIndex + countNumberOfSmallerElements;
        //4. correct the position of pivot
        this.swap(pivotIndex, startIndex);

        //5. sort the smaller elements to left of pivot and greater elements to right of pivot
        let i = startIndex; let j = endIndex;
        for(; i<j ;) {
            if(this.arr[i] <= pivot) {
                i++;
            }else if(arr[j] > pivot) {
                j--;
            }else {
                this.swap(i, j);
            }
        }

        //6. return pivotIndex;
    }

    quickSortHelper(startIndex, endIndex) {

        //1. Base case 
        if(startIndex >= endIndex){
            return;
        }
        //2. call partition function
        let partitionIndex = this.partioning(startIndex, endIndex);
        //3. recursive call quicksort from start_index to pivot_index -1;
        this.quickSortHelper(startIndex, partitionIndex-1);
        //4. recursive call quicksort() from pivot_index to end.
        this.quickSortHelper(partitionIndex+1, endIndex);
    }

    returnArray(){
        return this.arr;
    }
}

let arr = [12, 11 ,13, 5, 6, 7];
let startIndex = 0; let endIndex = arr.length-1;

let obj = new QuickSort(arr);
obj.quickSortHelper(startIndex, endIndex);
let sortedArray = obj.returnArray();

console.log("sorted array :: ", sortedArray);
