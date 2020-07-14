function countUniqueValues(value){
    // add whatever parameters you deem necessary - good luck!
    if (value.length === 0) {
        return 0;
    }
    
    let temp = {};
    
    for(let i = 0; i < value.length; i++){
        if (typeof temp[value[i]] === 'undefined') {
           temp[value[i]] = 1;
        } else {
           temp[value[i]] = temp[value[i]] + 1;
        }
    }
    
    return Object.keys(temp).length;
  }

  countUniqueValues([1,1,1,1,1,2]);
  countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);
  countUniqueValues([]);
  countUniqueValues([-2,-1,1,0,1]);