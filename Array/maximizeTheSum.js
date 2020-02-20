/*
Problem description: Given 2 sorted arrays (in increasing order), find a path through the intersections 
that produces maximum sum and return the maximum sum.
That is, we can switch from one array to another array only at common elements.
If no intersection element is present, we need to take sum of all elements from the array with greater sum.
*/

let arr1 = [1 ,5, 5,5,5,10, 15, 20, 25];
let arr2 = [2, 4, 5,5,5,5, 9, 15];


let arr1Index = 0;
let arr2Index = 0;

let sumOfArr1 = 0;
let sumOfArr2 = 0;
let maxSum = 0;

for(; arr1Index < arr1.length && arr2Index < arr2.length;){
    if(arr1[arr1Index] < arr2[arr2Index]){
        sumOfArr1 += arr1[arr1Index++];
    }else if(arr1[arr1Index] > arr2[arr2Index]){
        sumOfArr2 += arr2[arr2Index++];
    }
    else if (arr1[arr1Index] === arr2[arr2Index]){
        sumOfArr1 += arr1[arr1Index]; sumOfArr2 += arr2[arr2Index];
        maxSum += sumOfArr1 >= sumOfArr2 ? sumOfArr1 : sumOfArr2;
        sumOfArr1 =0; sumOfArr2 =0;
        arr1Index++; arr2Index++; 
    }
}

while(arr1Index < arr1.length){
    maxSum += arr1[arr1Index]; arr1Index++;
}

while(arr2Index < arr2.length){
    maxSum += arr2[arr2Index]; arr2Index++
}

console.log("maxSum :: ", maxSum);


// Approach 2 
// let m = arr1.length,  n = arr2.length;
// let i =0, j=0;
// let result =0, sum1 =0, sum2 =0;
// while(i<m && j <n){
//     if(arr1[i] < arr2[j]){
//         sum1 += arr1[i++];
//     }
//     else if (arr1[i] > arr2[j]){
//         sum2 += arr2[j++];
//     }else{
//         result += Math.max(sum1, sum2);

//         sum1 =0;
//         sum2 =0;

//         while(i< m && j< n && arr1[i] == arr2[j]){
//             result = result+ arr1[i++];
//             j++;
//         }
//     }
// }

// while (i< m){
//     sum1 +=  arr1[i++];
// }

// while (j<n){
//     sum2 += arr2[j++];
// }

// result += Math.max(sum1, sum2);

// console.log("result :: ", result);