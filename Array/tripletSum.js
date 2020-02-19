/*
Given a random integer array and a number x. Find and print the triplets of elements in the array 
which sum to x. While printing a triplet, print the smallest element first.
That is, if a valid triplet is (6, 5, 10) print "5 6 10". 
There is no constraint that out of 5 triplets which have to be printed on 1st line.
You can print triplets in any order, just be careful about the order of elements in a triplet.
*/
//let arr = [1, 2, 3, 4, 5, 6, 7 ]
let arr =[6,1, 3,1, 2, 3, 4, 5, 5,6, 7 ,10,11,12];
let sumToBe = 12;

// let sortedarray = arr.sort((a,b)=>{
//     return a-b;
// });
// console.log("sortedarray :: ", sortedarray);

// let previousIndex = 0;
// let currentIndex = 1;
// let k = arr.length -1;

// for(;currentIndex < k;) {
//     if(sumToBe <= sortedarray[k]){
//         k--;
//     }
//     else {
//         let x = sumToBe - sortedarray[k];
//         if(sortedarray[previousIndex] + sortedarray[currentIndex] === x){
//             console.log(sortedarray[previousIndex], sortedarray[currentIndex],sortedarray[k]);
//             k--; previousIndex++; currentIndex = previousIndex+1;
//         }else if(sortedarray[previousIndex] + sortedarray[currentIndex] > x){
//             k--;
//         }else{
//             currentIndex++;
//         }

//     }
    
// }

// // Approach - 2nd

function printNumberOfpairs( sortedArr, i , startIndex, endIndex, numberOfPairs) {
    while(numberOfPairs > 0){
        console.log(sortedArr[i], sortedArr[startIndex], sortedArr[endIndex]);
        numberOfPairs--;
    }
}

function findTriplet(arr) {
    let sortedArr = arr.sort((a,b)=>{
        return a-b;
    });
    console.log("sorted Array :: ", sortedArr);

    for(let i =0; i< sortedArr.length; i++){
        let startIndex = i+1;
        let endIndex = sortedArr.length-1;
        let x = sumToBe - sortedArr[i];

        while (startIndex < endIndex){
            if(sortedArr[startIndex] + sortedArr[endIndex] == x){
                if(sortedArr[startIndex] == sortedArr[endIndex]){
                    console.log("All elements are same from start to end as array is sorted");
                    count = (endIndex - startIndex) + 1;
                    numOfPairs = ((count-1)*(count))/2;
                    printNumberOfpairs(sortedArr,i, startIndex, endIndex, numOfPairs);
                    startIndex = endIndex;
                }else{
                    let temp = sortedArr[startIndex] , st = startIndex, countDuplicateFromstart = 0;
                    while(sortedArr[st] == temp && st<=endIndex){
                        countDuplicateFromstart++; st++;
                    }
                    temp = sortedArr[endIndex]; let ei = endIndex, countDuplicateFromEnd = 0;
                    while(sortedArr[ei] == temp && ei>=0){
                        countDuplicateFromEnd++ ; ei--;
                    }
                    let totalCombinationsOfDuplicate = countDuplicateFromstart*countDuplicateFromEnd;
                    startIndex = st; endIndex = ei;
                    printNumberOfpairs(sortedArr, i, startIndex-1, endIndex+1, totalCombinationsOfDuplicate);
                }
            }
            else if(sortedArr[startIndex] + sortedArr[endIndex] < x){
                startIndex++;
            }else{
                endIndex--;
            }
        }
    }
}

findTriplet(arr);