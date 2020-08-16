
// Object.size = function(obj) {
//     var size = 0, key;
//     for (key in obj) {
//         if (obj.hasOwnProperty(key)) size++;
//     }
//     return size;
// };

// let sortarrayOnThebasisOfFrequency = (obj) => {
//     let minValue = Math.min.apply(null, Object.values(obj));    
//     let minKey = Math.min.apply(null, Object.keys(obj));

//     if(Object.size(obj) == 0) {
//         return;
//     }

//     if(obj[minKey] == minValue) {
//         console.log(minKey);
//         delete obj[minKey];
//     } else {
//         let minValueKey = Object.keys(obj).find(eachKey => obj[eachKey] === minValue)
//         console.log(minValueKey);
//         delete obj[minValueKey];
//     }
//     sortarrayOnThebasisOfFrequency(obj);
// }

let sortarrayOnThebasisOfFrequency = (obj) => {
    let values = Object.values(obj);
    let sortedvalue = values.sort();
    for(let i =0; i<sortedvalue.length;i++) {
        let minValueKey = Object.keys(obj).find(eachKey => obj[eachKey] === sortedvalue[i])
         console.log(minValueKey);
         delete obj[minValueKey];
    }
}

let createMap = (arr, obj) =>{
    for(let i =0; i< arr.length; i++) {

        let value = 1;
        if(arr[i] in obj){ 
            value = obj[arr[i]];
            value++;   
        }
        obj[arr[i]] = value;
  
    }

    console.log("obj 1 :: ", obj);
        return obj;

}

let arr= [4, 5, 6, 5, 4, 3,7];   //op = 3,6,4,5
let obj = {};
obj = createMap(arr, obj);
sortarrayOnThebasisOfFrequency(obj);
//console.log("object :: ", createMap(arr, obj));
//console.log("map :: ", obj, "value :: ", Math.min.apply(null, Object.values(obj)), Math.min.apply(null, Object.keys(obj)));