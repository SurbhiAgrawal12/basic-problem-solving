/*
Problem Description: Given two sorted arrays of Size M and N respectively, 
merge them into a third array such that the third array is also sorted.
*/

let arr1 = [1,1,1,2,2,3,4];
let arr2 = [1,2,3];//5,6,7
let mergeArray = [];

let arr1Index =0;
let arr2Index = 0;
let mergeArrayIndex = 0;

for(;arr1Index < arr1.length && arr2Index < arr2.length;){
    if(arr1[arr1Index] < arr2[arr2Index] ){ 
        mergeArray[mergeArrayIndex] = arr1[arr1Index]
        arr1Index++ ;  mergeArrayIndex++;
    }else{
        mergeArray[mergeArrayIndex] = arr2[arr2Index]
        arr2Index++ ;  mergeArrayIndex++;
    }
}

while(arr1Index < arr1.length){
    mergeArray[mergeArrayIndex] = arr1[arr1Index]
    arr1Index++ ;  mergeArrayIndex++;
}

while(arr2Index < arr2.length){
    mergeArray[mergeArrayIndex] = arr2[arr2Index]
    arr2Index++ ;  mergeArrayIndex++;
}

console.log("mergeArray :: ", mergeArray);