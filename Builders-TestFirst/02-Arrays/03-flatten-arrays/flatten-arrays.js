function flatten(array){
    let flattenedArray = [];
    for(i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            let currentArray = array[i];
            flattenedArray = flattenedArray.concat(currentArray);
        }else{
            flattenedArray.push(array[i]);
        }

    }return flattenedArray;
}

console.log(flatten([1,[2,3],4,[5,6,7],9]));