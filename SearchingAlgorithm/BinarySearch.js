/*
Problem Description: Given a sorted integer array (in ascending order) and an
element x. You need to search this element x in the given input array using
binary search. Return the index of element in the input. If element is not found in
the array, return -1.
*/

/*
*******************************Algorithm***************************
1. If middle element is equal to x, return that element’s index.
2. If middle element is less than x, we’ll do the search in the right half of the array.
3. If middle element is more than x, we’ll do the search in the left half of the array.
*/