/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    if (n == 1) return x;
    if (n == 0) return 1;
    let sum = x;
    for (let i = 1; i < n; i++){
        sum*=x;
    }
    return sum.toFixed(5);
    
};

var myPow2 = function (x, n) {//快速幂
    if (n == 0) return 1;
    if (n == 1) return x.toFixed(5);
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    let sum = 1;
    while (n > 0) {
        if (n & 1 == 1) {
            sum *= x;
        }
        x *= x;
        n = n >>> 1;
    }
    return sum.toFixed(5);
}
console.log(myPow2(2.00000, -2147483648));