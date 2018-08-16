function changeKeys(array,steps){
    var keys = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    var newArray = [];
    for(i=0;i<array.length;i++){
        //currentkeyindex=keys.indexOf
        newArray[i] = keys[(keys.indexOf(array[i]) + steps) % keys.length];
        console.log(newArray[i]);
    }
    return newArray
}

