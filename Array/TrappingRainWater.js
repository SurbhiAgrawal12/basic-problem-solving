// Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
// Examples:

// Input: arr[]   = {2, 0, 2}
// Output: 2
// Explanation:
// We can trap 2 units of water in the middle gap.


// Input: arr[]   = {3, 0, 2, 0, 4}
// Output: 7
// Explanation:
// We can trap "3 units" of water between 3 and 2,
// "1 unit" on top of bar 2 and "3 units" between 2 
// and 4.  See below diagram also.

//method1: The idea is to traverse every array element and find the highest bars on left and right sides.
//Take the smaller of two heights. The difference between the smaller height and height of the current element
// is the amount of water that can be stored in this array element.

//method1 : getStoredWaterUnits , time complexity = sqr(n) , space complexity : o(1)
getStoredWaterUnits = (arr) => {

    let waterStore = 0;

 //   1. we will check the left and right of current Element. will check max of that , will subtract the height of current element with that.
    for(let i =1; i<arr.length; i++) {
        let left = arr[i];
        for(let j =0; j<i; j++ ) {
            left = max(arr[j], left);
        }

        let right = arr[i];
        for(let k = i+1; k > arr.length-1; k++) {
            right = max(arr[k], right);
        }

        waterStore = waterStore + (min(left,right) - arr[i]);
    }

    return waterStore;
}

getStoredWaterUnitsInnComplexity = (arr) => {
    let left = [];
    let right = [];
    let water = 0;

    left[0] = arr[0];
    for(let i = 1; i<arr.length; i++) {
        left[i] = max(left[i-1], arr[i]);
    }

    right[arr.length-1] = arr[arr.length-1];
    for(let i = arr.length-2; i>=0; i--) {
        right[i] = max(right[i+1], arr[i]);
    }

    for (let i = 0; i < arr.length; i++) 
        water += min(left[i], right[i]) - arr[i]; 
  
    return water;
}

let arr = [3, 0, 2, 0, 4];