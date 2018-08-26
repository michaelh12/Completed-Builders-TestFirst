function myFilter(arr, f){
  let returnedArr = [];
  for(let i=0;i<arr.length;i++){
    if(f(arr[i])){
      returnedArr.push(arr[i]);
    }
  }
  return returnedArr;

}