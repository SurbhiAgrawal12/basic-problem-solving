// MergeSort(arr[], startIndex,  endIndex)
// If endIndex > startIndex
//      1. Find the middle point to divide the array into two halves:  
//              middle midIndex = (startIndex+endIndex)/2
//      2. Call mergeSort for first half:   
//              Call mergeSort(arr, startIndex,  midIndex)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, midIndex+1, endIndex)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call merge(arr, startIndex, midIndex, endIndex)

class MergeSort {
    constructor(arr) {
        this.arr = arr;
        this.outputArr = [];
    }

    mergeSortHelper(startIndex, endIndex) {

        //Base Case
        if(startIndex >= endIndex) {
            return;
        }

        let midIndex = (startIndex + endIndex)/2;
        this.mergeSortHelper(startIndex, midIndex);
        this.mergeSortHelper(midIndex+1, endIndex);
        this.merge(startIndex, midIndex, endIndex);

        return this.outputArr;
    }

    merge(startIndex, midIndex, endIndex) {

        let i = startIndex; let j = endIndex; let k =0;
        while(i<= midIndex && j <= endIndex){
            if(this.arr[i] < this.arr[j]) {
                this.outputArr[k] = arr[i];
                k++; i++;
            }else {
                this.outputArr[k] = arr[j];
                k++; j++;
            }
        }

        while(i<= midIndex) {
            this.outputArr[k] = arr[i];
            k++; i++;
        }

        while(j <= endIndex) {
            this.outputArr[k] = arr[j];
            k++; j++;
        }

    }    
}

let arr = [12, 11 ,13, 5, 6, 7];
let obj = new MergeSort(arr);
let outputArr = obj.mergeSortHelper(0, arr.length);
console.log("outputArr :: ", outputArr);