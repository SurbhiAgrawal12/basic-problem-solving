function intersection(arr1, arr2) {
  const set = new Set(arr1);
  const result = [];
  for (let i = 0; i < arr2.length; i++) {
    if (set.has(arr2[i])) {
      result.push(arr2[i]);
      set.delete(arr2[i]);
    }
  }
  return result;
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const result = intersection(arr1, arr2);
console.log(result); // Output: [3, 4, 5]
//Set(4) { 1, 2, 3, 4 }
/** we can use hashmap here as well */
