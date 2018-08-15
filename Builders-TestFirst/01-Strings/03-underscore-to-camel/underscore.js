function underToCamel(str){
    let variableName = "";
    let lastIndex;
    for(i=0;i<str.length;i++){
        if(str[i]!== "_" && i-lastIndex !== 1){
            variableName += str[i];
        }else if(str[i] === "_"){
            lastIndex = i;
        
        }else{
            variableName += str[i].toUpperCase();
        }
    }return variableName;
}