/**https://leetcode-cn.com/problems/unique-binary-search-trees/
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    const memo = Array(n + 1);
    for (let i = 0; i < n + 1; i++) {
        memo[i] = Array(n + 1).fill(0);
    }
    function count(lo, hi) {
        if (lo > hi) return 1;
        if (memo[lo][hi] !== 0) {
            return memo[lo][hi];
        }
        let ret = 0;
        for (let mid = lo; mid <= hi; mid++) {
            const left = count(lo, mid - 1);
            const right = count(mid + 1, hi);
            ret += left * right;
        }
        memo[lo][hi] = ret;
        return ret;
    }
    return count(1, n);
};
console.log(numTrees(3));
