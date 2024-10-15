function invert(array) {

  var newArr = [];
  for(var i = 0; i < array.length; i++){
    newArr.push(-array[i]);
  }
   return newArr;
}

const resultInvert =invert([1,2,3,4,5]);
 
document.write(resultInvert);