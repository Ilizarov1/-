/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    let digit = 1; let start = 1; let cnt = 9;
    while (n > cnt) {
        n -= cnt;
        start *= 10;
        cnt = 9 * (++digit) * start;
    }
    let num = start + (n - 1) / digit;
    return num.toString().charAt((n - 1) % digit);
};
console.log(findNthDigit(10000000));