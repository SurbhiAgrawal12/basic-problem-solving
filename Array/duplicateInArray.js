/*
Problem Description: You are given with an array of integers of size n which contains numbers
from 0 to n - 2. Each number is present at least once. That is, if n = 5, numbers from 0 to 3 is
present in the given array at least once and one number is present twice. You need to find and
return that duplicate number present in the array.
*/

/*
*******************************Algorithm*****************************
Approach 1: In this question you need to run two loops, pick an element from the first loop and
then in the inner loop check if the element appears once again or not, if yes then return that
element, otherwise move to the next element.

Approach 2: Using XOR operator, we can solve this problem in one traversal only. 
The following facts about XOR operation:
1. If we XOR a number by itself, even number of times then it will give you 0.
2. If we XOR a number with itself, odd number of times, then it will give you the number
itself.
3. Also XOR of a number with 0 gives you that number again.

Approach 3: Another approach is to make use of the condition that all elements lies between 0
and n-2. So first calculate the sum of all natural numbers between 0 to n-2 by using the direct
formula ((n - 1) * (n - 2)) / 2 and sum of all elements of the array. Now, subtract the sum of all
natural numbers between 0 to n-2 from sum of all elements of the array. This will give you the
duplicate element present in the array.

*/

// ****************************Psedo Code****************************
function findDuplicateUsingXOR(arr) {

    let xorOfArr = 0;

    for(let i =0; i< arr.length; i++){
        xorOfArr =xorOfArr ^ arr[i];
    }
    

    for (let i =0; i<= arr.length-2; i++){
        xorOfArr = xorOfArr ^ i;
    } 
    
    return xorOfArr;
}

//Approach 1
function findDuplicateUsingDoubleForLoop(arr) {
    for(let i = 0; i< arr.length; i++){
        for(let j =0; j< arr.length; j++){
            if(i != j && arr[i] == arr[j]){
                return arr[i];
            }
        }
    }
    return Number.NEGATIVE_INFINITY;
}

//Approach 2 
function findDuplicate(arr) {
    
    let sumOfArr = 0;
    for(let i = 0; i< arr.length; i++){
        sumOfArr += arr[i];
    }
    // Sum of Natural Number from 0 to arr.length-2
    let n = arr.length-2;
    let sumOfNaturalNumber = ((n)*(n+1))/2;
    let duplicateElement = sumOfArr - sumOfNaturalNumber;
    return duplicateElement;

}

function main() {
    let arr = [0, 5, 2, 5, 4, 7, 1, 3, 6];
    console.log("duplicate Element :: ", findDuplicate(arr));
    console.log("duplicate Element :: ", findDuplicateUsingDoubleForLoop(arr));
    console.log("duplicate Element :: ", findDuplicateUsingXOR(arr));

}

main();