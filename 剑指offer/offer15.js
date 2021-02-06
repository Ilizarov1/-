/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var arr = Array.from(n.toString(2));
    let cnt = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == "1") cnt++;
    }
    return cnt;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight2 = function (n) {
    let cnt = 0;
    while (n != 0) {
        cnt += n & 1;
        n=n >>> 1;
    }
    return cnt;
}
console.log(hammingWeight2(00000000000000000000000000001011));