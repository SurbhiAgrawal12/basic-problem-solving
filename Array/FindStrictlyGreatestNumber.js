// Find just strictly greater element from first array for each element in second array
// Given two arrays A[] and B[] containing N elements, the task is to find, for every element in the array B[], 
// the element which is just strictly greater than that element which is present in the array A[]. If no value is present, then print ‘null’.

// Note: The value from the array A[] can only be used once.

// Input: A[] = {0, 1, 2, 3, 4}, B[] = {0, 1, 1, 2, 3}
// Output: 1 2 3 4 null
// Explanation:
// On iterating every element in the array B[]:
// The value which is strictly greater than 0 and present in the array A[] is 1.
// Similarly, the value which is strictly greater than 1 and present in the array A[] is 2.
// Similarly, the value which is strictly greater than 1 and present in the array A[] is 3 because 2 has already been used for the previous 1.
// Similarly, the value which is strictly greater than 2 and present in the array A[] is 4.
// Now, there is no value in the array which is greater than 3 because 4 has already been used for the previous 2. So, null is printed.

// Input: A[] = {0, 1, 6, 4, 0, 2, 4, 2, 4, 7}, B[] = {0, 1, 6, 4, 0, 2, 4, 2, 4, 7}
// Output: 1 2 7 6 2 4 null 4 null null

