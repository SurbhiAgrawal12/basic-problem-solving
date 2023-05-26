function checkArrayRotation(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return arr.length - 1 - i;
    }
  }
  return 0;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(" Array has been rotate by :: ", checkArrayRotation(arr));
//use binarySearch for log(n) complexity
