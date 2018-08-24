function sumOfDigits(num){
  if(num === undefined){
    return 0;
  }
  let total = 0;
  let stringNum = num.toString();
  for(i=0;i<stringNum.length;i++){
    total += parseInt(stringNum[i]);
  }
  return total;
}