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
Function findDuplicate() {
    let answer = 0;
    for(let i =0; i< arr.length){
        answer=answer xor arr[i]
        for (){}
            i=0 to i less than or equal to n-2:
            answer=answer xor i
        Return answer
    }  

}
//Approach 1
Function Findduplicate:
For i = 0 to i less than size:
For j = 0 to j less than size:
If i not equal to j and arr[i] is equal to arr[j]:
Return arr[i]
return minus infinity

//Approach 2 
Function Findduplicate:
answer=0
For i =0 to i less than n:
answer=answer xor arr[i]
For i=0 to i less than or equal to n-2:
answer=answer xor i
Return answer