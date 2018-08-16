function evenOdd(array){
    even_array = [];
    odd_array = [];
    final_array = [even_array,odd_array];
    for(i=0;i<array.length;i++){
        itminlist = array[i];
        if(itminlist%2===0){
            even_array.push(itminlist);
         
        }else{
            odd_array.push(itminlist);
        }
    }return final_array;
}

console.log(evenOdd([1,2,3,4,5,6,7,8,9,10]));
