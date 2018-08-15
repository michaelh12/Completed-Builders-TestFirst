function palindrome(str){
    reverseStr = "";
    for(i = str.length-1;i>=0;i--){
        reverseStr+=str[i];
    }
    if(str===reverseStr){
        return true;
    }else{
        return false;
    }
}