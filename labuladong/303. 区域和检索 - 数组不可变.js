/**https://leetcode-cn.com/problems/range-sum-query-immutable/
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.preSum = [0];
    nums.forEach((value) => {
        this.preSum.push(this.preSum[this.preSum.length - 1] + value);
    });
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.preSum[right + 1] - this.preSum[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
