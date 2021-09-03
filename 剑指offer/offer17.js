/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    var arr = new Array();
    for (let i = 1; i < Math.pow(10, n); i++){
        arr.push(i);
    }
    return arr;
};
console.log(printNumbers(1));