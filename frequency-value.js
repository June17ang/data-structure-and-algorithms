//same native ===> O(n*2)
function same(arr1, arr2)
{
    if (arr1.length != arr2.length) {
        return false;
    }

    //so this function is nested looped 
    for (let key = 0; key < arr1.length; key++) {
        //indexof is a loop
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

//to enhance this need to changed ==> O(n)
function sameEnhance(arr1, arr2)
{
    if (arr1.length != arr2.length) {
        return false;
    }

    let freqCounter1 = {};
    let freqCounter2 = {}

    for (let val1 of arr1) {
        freqCounter1[val1] = (freqCounter1[val1] || 0) + 1
    }

    for (let val2 of arr2) {
        freqCounter2[val2] = (freqCounter2[val2] || 0) + 1
    }

    for (let key in freqCounter1) {
        // no freqCounter1 value in freqCounter2
        if (!(key ** 2 in freqCounter2)) {
            return false;
        }

        // freqCounter2 duplicated value is not same freqCounter1 duplicated value
        if (freqCounter2[key ** 2] !== freqCounter1[key]) {
            return false;
        }
    }

    return true;
}

console.log(sameEnhance([1,2,3], [4,1,9]));
console.log(sameEnhance([1,2], [4,1,9]));
console.log(sameEnhance([1,2,3], [4,1,4]));