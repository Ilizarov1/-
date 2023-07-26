/** https://leetcode-cn.com/problems/partition-to-k-equal-sum-subsets/
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    // 排除基本情况
    if (k > nums.length) {
        return false;
    }
    // 统计
    let sum = 0;
    nums.forEach((v) => {
        sum += v;
    });
    // 每个集合的值
    let target = Math.floor(sum / k);
    let used = 0;
    const allUsed = (1 << nums.length) - 1;
    const memo = new Map();
    function backtrack(k = 0, bucket = 0, start = 0) {
        // 退出情况
        // used === (1 << nums.length) - 1
        // 会被格式化成 used === 1 << (nums.length - 1)
        if (k === 0 && used === (1 << nums.length) - 1) {
            return true;
        }
        if (k === 0) {
            return false;
        }
        if (bucket === target) {
            // 当前桶装满
            // 从nums[0]开始选数字
            const res = backtrack(k - 1, 0, 0);
            // 备忘
            memo.set(used, res);
        }
        // 检查备忘录
        if (memo.has(used)) {
            return memo.get(used);
        }
        // 遍历回溯
        for (let i = start; i < nums.length; i++) {
            // 剪枝
            if (((used >> i) & 1) === 1) {
                // 判断第i位是否被选中
                continue;
            }
            // 当前数字太大
            if (nums[i] + bucket > target) {
                continue;
            }
            // 选择当前数字
            used |= 1 << i;
            bucket += nums[i];
            if (backtrack(k, bucket, i + 1)) {
                return true;
            }
            // 回溯，撤销选择
            used ^= 1 << i; // 异或置零
            bucket -= nums[i];
        }
        return false;
    }
    return backtrack(k, 0, 0);
};

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4));

var b = 2;
(function b() {
    b = 4;
    console.log(b);
})();
