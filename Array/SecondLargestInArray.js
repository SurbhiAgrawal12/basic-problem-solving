/*
Problem Description: You are given an array of integers and you have to find the second largest element 
present in the given array.
*/

/*
************************************Algorithms*******************************
Approach 1: The simplest solution of doing this problem is to sort the array in descending order
and return the second element, or sort in ascending order and return the 2nd element from last.
But, this won’t work in case of duplicate elements.
Time Complexity: Time complexity of this approach is O(nlogn) for sorting an array.

Approach 3: This is an efficient solution to find the second largest element in a single scan. In
this approach we will maintain both maximum and second maximum elements with us at a time
and will continue to update both by scanning the array only once.

*/