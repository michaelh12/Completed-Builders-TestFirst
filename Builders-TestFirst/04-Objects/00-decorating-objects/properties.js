
function setPropsOnObj(obj){
  obj.x = 7;
  obj.y = 8;
  obj.onePlus = function(num){
    return num + 1;
  };
}

function setPropsOnArr(arrayObject){
  arrayObject.hello = function(){
    return 'Hello!';
  };
  arrayObject.full = 'stack';
  arrayObject[0] = 5;
  arrayObject.twoTimes = function(num){
    return num * 2;
  };
}

function setPropsOnFunc(functionObject){
  functionObject();
  functionObject.year = "20??";
  functionObject.divideByTwo = function(value){
    return value/2;
  };
}

