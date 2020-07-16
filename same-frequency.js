// O(n)
function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    let str1 = num1.toString();
    let str2 = num2.toString();
    
    if (str1.length != str2.length) return false;
    
    let obj = {};
    for (let i = 0; i < str1.length; i++) {
        obj[str1[i]] = (obj[str1[i]] || 0) + 1;
    }
    
    for (let j = 0; j < str2.length; j++) {
        if (typeof obj[str2[j]] === 'undefined') {
            return false;
        }
        
        if (obj[str2[j]] <= 0) {
            return false;
        }
        
        obj[str2[j]] -= 1;
    }
    
    return true;
  }
  