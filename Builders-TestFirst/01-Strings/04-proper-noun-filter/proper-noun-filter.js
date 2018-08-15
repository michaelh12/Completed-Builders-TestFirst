let beginRange = 'A'.charCodeAt(0);
let endRange = 'Z'.charCodeAt(0);

function properNounFilter(word){
    if(word.charCodeAt(0)>=beginRange && word.charCodeAt(0)<=endRange){
        for(i=1;i<word.length;i++){
            if(word[i].charCodeAt(0)<beginRange || word[i].charCodeAt(0)>endRange){
                continue;
            }else{
                return false;
            }
        }return true;
    }return false;
    
    
}