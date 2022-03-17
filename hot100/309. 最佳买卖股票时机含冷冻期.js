/**https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const n = prices.length;
    const dp = [];
    /**
     * 三种状态；
     * [i][0] : 持有股票
     * [i][1] : 不持有，且在冷冻期
     * [i][2] : 不持有，且不在冷冻期
     */
    let state = Array(3).fill(0);
    state[0] = -prices[0];
    dp.push(state);
    for (let i = 1; i < n; i++) {
        state = Array(3);
        state[0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
        state[1] = dp[i - 1][0] + prices[i];
        state[2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
        dp.push(state);
    }
    return Math.max(dp[n - 1][1], dp[n - 1][2]);
};
console.log(maxProfit([1, 2, 3, 0, 2]));
