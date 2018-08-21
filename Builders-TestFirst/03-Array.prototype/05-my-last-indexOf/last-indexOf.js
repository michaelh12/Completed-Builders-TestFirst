function myLastIndexOf(arr,value,indexStart){
    let i;
    if(indexStart < 0){
        i = indexStart + (arr.length-1);
    }else if(indexStart >= 0){
        i = indexStart;
    }else if(!indexStart){
        i = arr.length-1;
    }
    for(i;i>=0;i--){
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}


function myLastIndexOf_solution(arr, searchFor, fromIndex) {
    if (fromIndex === undefined) {
        fromIndex = arr.length - 1;
    }

    for (var i = fromIndex; i >= 0; i--) {
        if (arr[i] === searchFor) {
            return i;
        }
    }

    return -1;
}

console.log(myLastIndexOf_solution([1,2,3,4,5,6,6,7,8,3,3],6,-1));
console.log(myLastIndexOf([1, 2, 3, 4, 5, 6, 6, 7, 8, 3, 3], 6, -3));