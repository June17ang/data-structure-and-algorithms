// function for valid anagram
function validAnagram(str1, str2) {
    if (str1.length <= 0 && str2.length <= 0) {
        return true;
    }

    let obj1 = {};
    let obj2 = {};

    for (const val of str1.split("")) {
        obj1[val] = (obj1[val] || 0) + 1
    }

    for (const val of str2.split("")) {
        obj2[val] = (obj2[val] || 0) + 1
    }

    if (obj1.length !== obj2.length) {
        return false;
    }

    for (let key in obj1) {
        if (typeof obj2[key] === 'undefined') {
            return false;
        }

        if (obj2[key] !== obj1[key]) {
            return false;
        }
    }
    return true;
}

validAnagram('', '');
validAnagram('aaz', 'zza');
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana');
validAnagram('texttwisttime', 'timetwisttext');


//--------------Enhance-----------------

function validAnagram2(first, second)
{
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (const val of first.split("")) {
        lookup[val] = (lookup[val] || 0) + 1
    }

    for (const letter of second.split("")) {
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}