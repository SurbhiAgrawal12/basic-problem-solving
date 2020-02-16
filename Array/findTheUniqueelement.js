/*
Problem Description: Given an integer array of size 2N + 1. In this given array, N numbers are
present twice and one number is present only once in the array. You need to find and return that
number which is unique in the array.
*/

/*
*******************************Algorithm*************************************
Approach 1: For each element of the input array, you need to run a loop on the whole array, to
check whether the same element exists or not, if it exists then we check for the next element, else
we will return that element, as we found the unique element.

Approach 2: We can Use Sorting to solve the problem in O(nLogn) time. The idea is simple,
first sort the array, so that all occurrences of every element become consecutive. Once the
occurrences become consecutive, we can traverse the sorted array and print the unique element
in O(n) time.

Approach 3: The best solution is to use XOR. Taking XOR of all the elements present in the
array, gives us the unique element present in the array.
This approach uses 2 properties of XOR:
1. XOR of a number with itself is 0.
2. XOR of a number with 0 is number itself.
*/