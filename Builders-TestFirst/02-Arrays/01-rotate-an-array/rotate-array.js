function rotate(array, steps){
    returnArray = array;
   for(i=0;i<steps;i++){
        removedlast = returnArray.pop()
        returnArray.unshift(removedlast);
    }
    return returnArray;
}