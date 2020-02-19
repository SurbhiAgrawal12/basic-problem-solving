/*
Problem Description: Given a random integer array A and a number x. 
Find and print the pair of elements in the array which sum to x.
Array A can contain duplicate elements.
While printing a pair, print the smaller element first.
That is, if a valid pair is (6, 5) print "5 6". 
There is no constraint that out of 5 pairs which have to be printed in 1st line. 
You can print pairs in any order, just be careful about the order of elements in a pair.
*/


function printNumberOfPairs(numberOfPairs, sortedArr, startIndex, endIndex) {
    while(numberOfPairs > 0){
        console.log(sortedArr[startIndex], sortedArr[endIndex]);
        numberOfPairs--;
    }
}

function countDuplicateElements(sortedArr, startIndex, endIndex) {
    let count = (endIndex-startIndex)+1;
    // simply -- from two numbers 1 pair can be formed, so n=count-1, pairs = n(n+1)/2
    let numberOfPairs = ((count-1)*(count))/2;
    printNumberOfPairs(numberOfPairs, sortedArr, startIndex, endIndex);
}

function pairSum(arr) {

    let sortedArr = arr.sort((a,b)=>{
        return a-b;
    });
    
    let startIndex = 0;
    let endIndex = arr.length-1;

    for(;startIndex < endIndex;) {
        if(sortedArr[startIndex] + sortedArr[endIndex] == x){
            if(sortedArr[startIndex] == sortedArr[endIndex]){
                console.log(" All elements are same from start index to end index");
                countDuplicateElements(sortedArr, startIndex, endIndex);
                startIndex = endIndex;
            }
            else{
                // pair elements having desired sum but search do they have duplicate elements as well eg: [2,2,3,3]
                let countStart = 0, countEnd = 0;
                let temp = arr[startIndex], i = startIndex;
                while(arr[i] == temp && i<endIndex){
                    i++; countStart++;
                }
                temp = arr[endIndex]; let j = endIndex;
                while(arr[j] == temp && j>startIndex){
                    j--; countEnd++;
                }
                startIndex = i; endIndex = j;
                let totalCount = countStart*countEnd;
                printNumberOfPairs(totalCount, sortedArr, startIndex-1, endIndex+1);
            }
        }   
        else if(sortedArr[startIndex] + sortedArr[endIndex] < x){
            startIndex++;
        }else{
            endIndex--;
        }
    }
}

let arr = [1, 3, 6, 2, 5, 4, 3, 2, 4];
let x = 7;
pairSum(arr);