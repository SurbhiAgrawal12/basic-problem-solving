/*
Problem Description: Predict the output
*/

let a = [1,2,3];
a[-1] = 12;
console.log(a[a.indexOf(10000)]);

// output : a = [ 1, 2, 3, '-1': 12 ]  --(here -1 will not be index, it will work as a internal property of a)



