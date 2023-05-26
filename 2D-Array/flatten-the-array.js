//sort array

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
Input: lists = [1, 4, 5, [1, 3, 4], [2, 6], [[7, 8, 9]]];
Output: [1, 1, 2, 3, 4, 4, 5, 6];

// let smallestNumber = -1;
// let arr = [];
// for(let i = 0; i< lists.length; i++)  {
//     for(let j = 0; j< lists[i].length; j++) {
//         arr.push(lists[i][j]);
//     }
// }

/** another approach */
let arr = [];
for (let each of lists) {
  arr = [...arr, ...each];
}
arr.sort((a, b) => {
  return a - b;
});
// console.log("arr :: ", arr);

/** another approach */
console.log(lists.flat(2));

/**
 * Note: In JavaScript, the flat() function is an array method that flattens a nested array 
 * structure by concatenating all sub-arrays into a single-dimensional array. It creates a 
 * new array that contains all the elements of the original array, recursively flattening any 
 * nested arrays up to the specified depth.
 * 
 * The flat() function accepts an optional parameter depth, which indicates the level of 
 * nesting to flatten. By default, depth is set to 1, which means only the immediate sub-arrays 
 * are flattened. You can provide a different depth value to control how many levels of nesting
 * are flattened.
 * 
 * In the case of console.log(lists.flat(2)), it suggests that lists is an array, and the
 * flat() method is called on it with a depth of 2. This means it will flatten the nested 
 * arrays within lists up to a depth of 2, resulting in a single-dimensional array.
 * 
 * For example, consider the following nested array:

const lists = [[1, 2], [3, [4, 5]]];
If you call lists.flat(2), it will flatten the nested arrays up to a depth of 2, 
resulting in the following single-dimensional array:
[1, 2, 3, 4, 5]

The flat() method is particularly useful when you have an array with multiple levels of
nesting and want to transform it into a simpler, one-dimensional array for further processing 
or manipulation.
 */
