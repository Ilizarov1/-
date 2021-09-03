/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    if (n <= 3) return n - 1;
    let a = parseInt(n / 3);
    let b = n % 3;
    if (b == 0)
        return Math.pow(3, a);
    else if (b == 1)
        return Math.pow(3, a - 1) * 4;
    else
        return Math.pow(3, a) * 2;
};

/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope2 = function(n) {
    if (n <= 3) return n - 1;
    let a = parseInt(n / 3);
    let b = n % 3;
    let p = 1000000007;
    let rem = quickPow(3, a, p);
    if (b == 0)
        return (rem) % p;
    else if (b == 1)
        return (4*quickPow(3,a-1,p))%p;
    else
        return (2 * rem) % p;
};

function quickPow(x, a,p) {//快速幂求余
    var rem = 1;
    for (let i = 0; i < a; i++){
        rem = (rem * x) % p;
    }
    return rem;
}

console.log(cuttingRope2(5));