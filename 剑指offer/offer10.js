/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    var a = 0, b = 1, sum=0;

    for (var i = 0; i < n; i++){
        sum = (a + b) % (1e9 + 7);
        a = b;
        b = sum;
    }
    return a;
};

/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    var a = 1, b = 2, sum = 0;
    for (var i = 1; i < n; i++){
        sum = (a + b) % 1000000007;
        a = b;
        b = sum;
    }
    return a;
};
console.log(numWays(3));