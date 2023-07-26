/**https://leetcode-cn.com/problems/subarray-sum-equals-k/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const preSum = new Map();
    preSum.set(0, 1);
    let sum0_i = 0;
    let ret = 0;
    /**
     *  k == preSum[i] - preSum[j]
     */
    for (let i = 0; i < nums.length; i++) {
        sum0_i += nums[i];
        const sum0_j = sum0_i - k;
        if (preSum.has(sum0_j)) ret += preSum.get(sum0_j);
        preSum.set(sum0_i, (preSum.get(sum0_i) || 0) + 1);
    }
    return ret;
};
console.log(subarraySum([1, 1, 1], 2));
