// function myMap(arr, f){
//     let map1 = arr.map(f);
//     return map1;
// }

function myMap(arr,f){
    let mappedArr = [];
    for(let i=0;i<arr.length;i++){
        mappedArr.push(f(arr[i]));
    }
    return mappedArr;
}

console.log('test')