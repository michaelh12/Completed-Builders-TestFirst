function myJoin(arr,delimiter=','){
  let newString = "";
  for(let i=0;i<arr.length;i++){
    if(i === arr.length-1){
      newString += arr[i].toString();
    }else{
      newString += arr[i].toString() + delimiter;

    }
  }
  return newString;
}