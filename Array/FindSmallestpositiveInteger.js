// write a function:
//    function Solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// for example, given A = [1,3,6,4,1,2], the function should return 5. 
// Given A = [1,2,3], the function should return 4.
// Given A = [-1, -3], the function should return 1.

// write an efficient algorithm for the following assumptions:
//    N is an integer within the range [1.....100,000];
//    each element of array A is an integer within the range [-1,000,000... 1,000,000].

function Solution(arr) {

    let minPositiveNumber = 1;

    for(let i = 0; i< arr.length; i++) {
        if(arr[i+1] - arr[i] == 1 || arr[i+1] - arr[i] == 0){
            continue;
        }else {
            if(arr[i] > 0) {
                minPositiveNumber = A[i] +1;
                break;
            } else {
                minPositiveNumber = 1;
                break;
            }
        }
    }
    return minPositiveNumber;
}

let A = [1,3,6,4,1,2];
let sortedArray = A.sort();
let smallestPositiveInteger = Solution(sortedArray);
console.log(smallestPositiveInteger);