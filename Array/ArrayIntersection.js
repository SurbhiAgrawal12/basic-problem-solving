/*
Problem Description: In this problem you are given with two random integer arrays, you have
to print their intersection. That is, you have to print all the elements that are present in both the
given arrays.
*/

/*
******************************Algorithms************************
Approach 1: The first approach we can think is that we can run 2 loops . In the outer loop pick
one element of array 1 and then with the help of an inner loop check whether the same element
exists in array 2 or not. If the same element is found then, we found an intersection so we print it,
and to handle the case of duplicates, we can replace this element with minus infinity.

Approach 2: A better solution for this problem is to sort both the arrays. Now, we have to find
the intersection of 2 sorted arrays
1) Use two index variables i and j, initialize them as i = 0, j = 0
2) If arr1[i] is smaller than arr2[j] then increment i.
3) If arr1[i] is greater than arr2[j] then increment j.
4) If both are same then print any of them and increment both i and j.

Approach 3: The best solution here is to use hashmaps to further reduce the time complexity of
this problem. To continue with the hashmaps we can proceed with the following steps:
1. Initialize an empty hashmap mapp.
2. Iterate through the first array, and put every element of this array in the mapp with its
corresponding count.
3. Now for every element of the second array, search it in the hashmap and if it is present
then print it and decrement its corresponding count. After decrement, if the corresponding
count becomes zero, then we should remove the element from the mapp.
*/


function getIntersectedArray(arr1, arr2) {
    arr1 = arr1.sort((a, b)=>{
        return a-b;
    });
    
    arr2 = arr2.sort((a, b)=>{
        return a-b;
    });

    let intersectedArray = [];
    let arr1Index = 0;
    let arr2Index = 0;

    for(; arr1Index <  arr1.length && arr2Index < arr2.length; ) {
        if(arr1[arr1Index] < arr2[arr2Index]){
            arr1Index++;
        }
        else if (arr1[arr1Index] > arr2[arr2Index]){
            arr2Index++;
    
        }else{
            intersectedArray.push(arr1[arr1Index])
            arr1Index++;
            arr2Index++;
        }
    }
    return intersectedArray;
    
}

function main() {
    let arr1 = [2, 6, 8, 5, 4, 3];
    let arr2 = [2 ,3 ,4 ,7 ];

    let intersectedArray = getIntersectedArray(arr1, arr2);
    console.log("intersectedArray :: ", intersectedArray);

}

main();







//let endIndex = (arr1Index > arr2Index) ? arr1Index : arr2Index;

