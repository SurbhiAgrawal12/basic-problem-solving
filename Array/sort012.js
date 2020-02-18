/*
Problem Description: You are given an integer array containing only 0s, 1s and 2s.
Write a solution to sort this array using one scan only.
*/

/*
***********************Algorithm*************************
1) let's use three pointer current , zeroPos and twoPos.
2) current - This will hold the position of the current element. This will be initialised to 0.
3) zeroPos - This will hold the index where we will push any 0s. This will be initialised to 0.
4) twoPos - This will hold the index where we will push any 2s. This will be initialised to arr.length - 1.
*/

// ********************Psedo Code************************

function swap(arr, i , j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sort012(arr) {

    let current = 0;
    let zeroPos = 0;
    let twoPos = arr.length - 1;

    while(current <= twoPos) {
        if(arr[current] == 0) {
            swap(arr, current , zeroPos);
            current++;
            zeroPos++;
        }
        else if(arr[current] == 1){
            current++;
        }
        else{
            swap(arr, current ,  twoPos);
            twoPos--;
        }

    }

}

let arr = [0, 1, 2, 0, 2, 0, 0];
console.log("original array :: ", arr);
sort012(arr);
console.log("sort012 :: ", arr);