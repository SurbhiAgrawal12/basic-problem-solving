// que: Filter the array with prime numbers only.

// Input: [5,9,63,29,35,6,55,23]
// Output: [5,29,23]

let arr = [5,9,63,29,35,6,55,23]

arr.filter((x) => {
    return checkprime(x);
})


let checkprime = (x) => {

    let prime = true;
    if(x == 2) {
        return true;
    }
    else if( x%2 == 0) {
        return false;
    }
    else {
        for(let i = 3; i*i <= x; i+=2) {
            if (x%i == 0) {
                prime  = false;
                break;
            }  
        }
        return prime;
    }   
}