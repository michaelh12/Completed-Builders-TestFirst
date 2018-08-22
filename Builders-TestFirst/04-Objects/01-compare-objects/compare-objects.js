function compareObjects(obj1,obj2){
  let keyArray1 = [];
  let valueArray1 = [];
  let keyArray2 = [];
  let valueArray2 = [];
  let keysequalcheck = true;
  let valueequalcheck = true;
  for(let key1 in obj1){
    keyArray1.push(key1);
    valueArray1.push(obj1[key1]);
  }
  for(let key2 in obj2){
    keyArray2.push(key2);
    valueArray2.push(obj2[key2]);

  }
  for(let i=0;i<keyArray1.length;i++){
    if(keyArray1[i]===keyArray2[i]){
      continue;
    }else{
      keysequalcheck = false;
      break;
    }
  }
  for(i=0;i<valueArray1.length;i++){
    if(valueArray1[i] === valueArray2[i]){
      continue;
    }else{
      valueequalcheck = false;
    }
  }
  return valueequalcheck && keysequalcheck ;
}
console.log(compareObjects({name:'michael',age:28},{name:'michael',age:28}));