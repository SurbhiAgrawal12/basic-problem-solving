/*
Problem Description: The function addToAll adds a given number to all the elements of an array. Write a code
to implement function addToAll so that the following code snippets gives the mentioned output.

a = [1,2,50,101]
b = a.addToAll(100);
console.log(b);
output : [101, 102, 150, 201]


y = [5, 6, 7];
z = y.addToAll(10);
console.log(z);
output : [15, 16, 17]

*/

/*
*************************Notes***************************
The prototype constructor allows you to add new properties and methods to the Array() object.
Array.prototype does not refer to a single array, but to the Array() object itself.
Prototype is a global object constructor which is available for all JavaScript objects.
*/

Array.prototype.addToAll = function(numToadd) {  //Note: instead of function arrow function will give undefined value of this
    return this.map((eachNum) => {
        return eachNum + numToadd;
    });
}

let a = [1,2,50,101];
let b = a.addToAll(100);
console.log("b :: ", b);


let y = [5, 6, 7];
let z = y.addToAll(10);
console.log("z :: ", z);

