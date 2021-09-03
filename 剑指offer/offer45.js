/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    nums.sort((a, b) => {
        let x = a.toString() + b.toString();
        let y = b.toString() + a.toString();
        let res = parseInt(x) - parseInt(y);
        return res;
    });
    return nums.join('');
};