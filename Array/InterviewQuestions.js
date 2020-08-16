//****************************INTERVIEW QUESTIONS*********************
//que1: what will be the log of below example?
var a = 10;
function b(){
    console.log(a)
    var a = 5;
}
b()
//output: undefined

////////////////////////////////////////////////////////////////////////
//que2: what will be the log of below example?
var a = [1,2,3,4,5]
console.log(a.every(x=>x>3); // output: false
console.log(a.some(x=>x>3);  // output: true
//////////////////////////////////////////////////////////////////////

//que3: what will be the log of below example?
var x = null ?? "Surbhi";
var y = 1 ?? "Hi";
console.log(x,y)  // output: "Surbhi" 1

//Note: The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand 
//is null or undefined, and otherwise returns its left-hand side operand.
//////////////////////////////////////////////////////////////////////

//que4: what will be the log of below example?
let a;
var x = a ? a = a: a = "Surbhi"
console.log(x); // output: surbhi

let b 
b ? var a = b : var a = Surbhi  // syntax error

/////////////////////////////////////////////////////////////////////////

//Note: The arr.every() method checks whether all the elements of the array satisfy the given condition or not that is provided by a method 
//passed to it as the argument.

// Example 1: In this example the method every() checks if a number is positive for every element of the array. 
// Since the array does not contain negative elements therefore this method returns true as the answer.

function ispositive(element, index, array) {
  return element > 0;
}
console.log([11, 89, 23, 7, 98].every(ispositive)); 

// Output: true

///////////////////////////////////////////////////////////////////////////
//Note: The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
// It returns a Boolean value.

const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

////////////////////////////////////////////////////////////////////////////

let arr =  ["Twas", "brillig,", "and", "the", "slithy", "toves", "Did", "gyre", "and", "gimble", "in", "the", "wabe;", "All", "mimsy", "were", "the", "borogoves,", "And", "the", "mome", "raths", "outgrabe."];

arr.filter((x) => {
    return /^[A-Z]/.test(x);
})

arr.filter((x) => {
    return /^[a-z]/.test(x);
})

arr.map((x) => {
    return x[0]
})

let characterToMatch = "m";
let outPutArr = [];
for(let eachElement of arr) {
    if(eachElement.toLowerCase()[0] === "m") {
        outPutArr.push(eachElement);
    }
}

arr.filter((x) => {
    return x[0] === "m"
})

let countMatchWords = () => {
    let count = 0;
    for(let eachWord of arr) {
        if(eachWord[0] === "t") {
            count++;
        }
    }
    return count;
}




/////////////////////////////////////////////
let originalNewStr = "Hello there"
let newStr = originalNewStr.toLowerCase();
let map = new Map();  // let obj = {}
let count = 1;

for(let i = 0; i< newStr.length; i++) {
    
    if(map.has(newStr[i])) {      // if(newStr[i] in obj) {}
        count = map.get(newStr[i]);   // obj[newStr[i]]
        count++;
    }
    else {
        count = 1;
    }

    map.set(newStr[i],count)   // obj[newStr[i]] = count;
    
}


let countCharacters = () => {
    let originalNewStr = "Hello there"
    let newStr = originalNewStr.toLowerCase();
    let obj = {}
    let count = 1;

    for(let i = 0; i< newStr.length; i++) {
        
        if(newStr[i] in obj) {
            count = obj[newStr[i]];
            count++;
        }
        else {
            count = 1;
        }

        obj[newStr[i]] = count;    
    }
    return obj;
}