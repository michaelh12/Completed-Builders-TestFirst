function getMid(string){
    divideByTwo = string.length/2;
    
    if(string.length%2 === 0){
        return (string[divideByTwo-1] + string[divideByTwo]);
    }else{
        return string[Math.floor(string.length/2)];
    }
}
