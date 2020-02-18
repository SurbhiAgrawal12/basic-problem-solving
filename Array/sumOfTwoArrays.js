/*
Problem description: Two random integer arrays are given A1 and A2, in which numbers from 0 to 9 are present 
at every index (i.e. single digit integer is present at every index of both given arrays).
You need to find sum of both the input arrays (like we add two integers) 
and put the result in another array i.e. output array 
(output arrays should also contain only single digits at every index).
The size A1 & A2 can be different.
Note : Output array size should be 1 more than the size of bigger array and place 0 at the 0th index 
if there is no carry. No need to print the elements of output array.


Number       Math.floor	Math.ceil	Math.round	Math.trunc
 3.1	        3	        4	        3	    3
 3.6	        3	        4	        4	    3
-1.1	       -2	       -1	       -1	   -1
-1.6	       -2	       -1	       -2	   -1

*/
function SumOfTwoArray(arr1, arr2){
    let sumOfArray = [];

    let sumOfArrayIndex = arr1.length > arr2.length ? arr1.length : arr2.length;
    let arr1Index = arr1.length-1;
    let arr2Index = arr2.length-1;

    let carry =0;
    let sum;

    while(sumOfArrayIndex >=0){
        if(!!arr1[arr1Index] && !!arr2[arr2Index]){
            sum = !!sum ? sum : arr1[arr1Index] + arr2[arr2Index] + carry;
        }
        else if(!!arr1[arr1Index] && !arr2[arr2Index]){
            sum = !!sum ? sum : arr1[arr1Index] + carry;
        }
        else if(!arr1[arr1Index] && !!arr2[arr2Index]) {
            sum = !!sum ? sum : arr2[arr2Index] + carry;
        }
        else{ 
            sum = carry;
        }
        
        if(sum >= 10){
            sumOfArray[sumOfArrayIndex] = sum%10;
            carry = Math.trunc(sum/10); // either use toFixed()
            sum = 0;
        }
        else {
            sumOfArray[sumOfArrayIndex] = sum;
            carry = 0;
            sum = 0;
        }
        sumOfArrayIndex--; 
        arr1Index--;
        arr2Index--;
    } 

    return sumOfArray;


}


let arr1 = [Number.NEGATIVE_INFINITY];
let arr2 = [ 1,2,3,3,4,5]; 

console.log("sumOfArray :: ", SumOfTwoArray(arr1, arr2));


//****************************Approach 2*******************************/
/*
let arr1 = [8, 5, 2]
let arr2 = [1, 3];
let arr3 = [];

let carry = 0;

let i = arr1.length-1;
let j = arr2.length-1;
let k = (arr1.length > arr2.length) ? arr1.length : arr2.length;

while(i>=0 && j >=0){
   
        if(arr1[i] + arr2[j] + carry < 9){
            arr3[k] = arr1[i] + arr2[j] + carry;
            carry = 0;
            i--; j--; k--;
        }else{
            arr3[k] = ((arr1[i] + arr2[j] + carry) % 10) ;
            carry = Math.round((arr1[i] + arr2[j] + carry) / 10);
            i--; j--; k--;
        }
    
}
while (i>=0){
    arr3[k] = arr1[i];
    i--; k--;
}

while (j>= 0){
    arr3[k] = arr1[i];
    k--; i--;
}

if(i<0 && j<0){
    arr3[0] = carry;
}

console.log("arr3 :: ", arr3);
*/