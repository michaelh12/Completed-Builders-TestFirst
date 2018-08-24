function objectifier(arr){
  let obj = {};
  for(i=0;i<arr.length;i++){
    let propName = arr[i][0];
    obj[propName] = {};

    let value = arr[i][1];
    for(j=0;j<value.length;j++){
      if(!Array.isArray(value[j])){
        let valuePropName = value[j];
        obj[propName][valuePropName] = value[j+1];
      }
      
    }
  }
  return obj;
}

objectifier([["Tony",["mafia"]],["Soprano",["mafia"]]])