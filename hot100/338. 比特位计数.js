/**https://leetcode-cn.com/problems/counting-bits/
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const dp = [];
    for (let i = 0; i <= n; i++) {
        dp.push(count(i));
    }
    function count(i) {
        let ret = 0;
        while (i > 0) {
            i &= i - 1;
            ret++;
        }
        return ret;
    }
    return dp;
};
