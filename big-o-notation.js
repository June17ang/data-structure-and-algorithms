// 1. Calculates the sum of all numbers from 1 up to (and including) some number n
// Solution for O(n)
function sumNumUpTo1(num)
{
    let total = 0;
    for (let inc = 1; inc <= num; inc++) {
        total += inc;
    }
    return total;
}

console.log('FOR SOLUTION : O(n)');
let t1 = performance.now();
console.log(sumNumUpTo1(100000000));
let t2 = performance.now();
console.log(`Time Elapsed ${(t2 - t1) / 1000}second`);

// Solution for O(1)
function sumNumUpTo2(num)
{
    return num * (num + 1) / 2
}

console.log('FOR SOLUTION : O(n)');
let t3 = performance.now();
console.log(sumNumUpTo2(100000000));
let t4 = performance.now();
console.log(`Time Elapsed ${(t4 - t3) / 1000} second`);