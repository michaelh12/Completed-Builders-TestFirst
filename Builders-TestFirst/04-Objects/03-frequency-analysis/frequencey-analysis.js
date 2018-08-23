function frequencyAnalysis(Text){
   let obj = {};
   for(i=0;i<Text.length;i++){
     let count = 0;
     let letter = Text[i];
     for(j=0;j<Text.length;j++){
       if(letter === Text[j]){
         count++;
       }
     }
     obj[letter] = count;
    }
    return obj;
}

