/*
Problem Description: Given a random integer array. Sort this array using insertion sort.
Change in the input array itself. You don't need to return or print elements.
*/

/*
**********************Algorithm******************************
Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.
1) Sort an arr[] of size n
2) Loop from i = 1 to n-1.
3) ……a) Pick element arr[i] and insert it into sorted sequence arr[0…i-1]

*/

function insertionSort(arr) {
    for(let i =1; i< arr.length; i++){
        let temp = arr[i];
        let j = i-1;
        console.log("round ", i,  arr);
        while (j>=0 && temp < arr[j]){
            if(temp < arr[j]){ 
                arr[j+1] = arr[j];
            }else{
                break;
            }
            j--;
        }
        arr[j+1] = temp;
    }
}

let arr = [5,1,6,7,9,2,4,5,7];  
insertionSort(arr);
console.log("arr :: ", arr);

// for(let i =1; i< arr.length; i++){
//     let temp = arr[i];
//     let j = i-1;
//     for(;j>=0 ; j--){
//         if(temp < arr[j]){ 
//             arr[j+1] = arr[j];
//         }else{
//             break;
//         }
       
//     }
//     arr[j+1] = temp;
// }
// console.log("arr :: ", arr);