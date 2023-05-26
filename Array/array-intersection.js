/*
Problem Description: In this problem you are given with two random integer arrays, you have
to print their intersection. That is, you have to print all the elements that are present in both the
given arrays.
*/

let arr1 = [2, 6, 8, 8, 5, 4, 2, 3];
let arr2 = [2, 2, 2, 3, 4, 8, 8, 8, 7];

let obj = {};
let intersectArray = [];

for (let eachItem of arr1) {
  if (eachItem in obj) {
    obj[eachItem]++;
  } else {
    obj[eachItem] = 1;
  }
}

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] in obj) {
    if (obj[arr2[i]] > 0) {
      obj[arr2[i]]--;
      intersectArray.push(arr2[i]);
    }
  }
}
console.log(obj);
console.log("intersectArray :: ", intersectArray);
