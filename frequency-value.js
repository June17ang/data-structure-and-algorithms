function same(arr1, arr2)
{
    if (arr1.length != arr2.length) {
        return false;
    }

    for (let key = 0; key < arr1.length; key++) {
        let idx = arr2.indexOf(arr1[key] ** 2);
        
        if (idx === -1) {
            return false; // not in array 2
        }
        arr2.splice(idx,1);
    }
    return true;
}

// [1,2,3] => [4,1,9]
console.log(same([1,2,3], [4,1,9]));
console.log(same([1,2], [4,1,9]));
console.log(same([1,2,3], [4,1,4]));