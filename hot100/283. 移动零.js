/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let a = 0;
    let b = 0;
    while (a < nums.length) {
        if (nums[a] !== 0) {
            [nums[b], nums[a]] = [nums[a], nums[b]];
            b++;
        }
        a++;
    }
    return nums;
};
