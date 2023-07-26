/** https://leetcode-cn.com/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const ret = [];
    function backtrack(cur = 0, path = []) {
        // 满足条件
        if (path.length === nums.length) {
            ret.push(path);
            return;
        }
        // 做出选择
        for (const n of nums) {
            if (!path.includes(n)) {
                backtrack(n, path.concat([n]));
            }
        }
    }

    for (const n of nums) {
        backtrack(n, [n]);
    }
    return ret;
};
