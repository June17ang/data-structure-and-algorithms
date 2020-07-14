// total will have 2 big o notation **make sure all array is key in asc or desc
function countUniqueValues(value){
    // add whatever parameters you deem necessary - good luck!
    if (value.length === 0) {
        return 0;
    }
    
    let temp = {};
    //O(n)
    for(let i = 0; i < value.length; i++){
        if (typeof temp[value[i]] === 'undefined') {
           temp[value[i]] = 1;
        } else {
           temp[value[i]] = temp[value[i]] + 1;
        }
    }
    
    // O(n)
    return Object.keys(temp).length;
  }

  countUniqueValues([1,1,1,1,1,2]);
  countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);
  countUniqueValues([]);
  countUniqueValues([-2,-1,1,0,1]);

  // total will have 1 big o notation **make sure all array is key in asc or desc
function countUniqueValues2(arr){
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 0) return 0;

    let i = 0;

    //O(n)
    for(let j = 0; j < arr.length; j++){
       if (arr[i] !== arr[j]) {
           i++;
           arr[i] = arr[j];
       }
    }
    
    return i + 1;
  }

  countUniqueValues([1,1,1,1,1,2]);
  countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);
  countUniqueValues([]);
  countUniqueValues([-2,-1,1,0,1]);