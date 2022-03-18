/**https://leetcode-cn.com/problems/coin-change/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const max = amount + 1;
    const n = coins.length;
    const dp = Array(amount + 1).fill(max);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < n; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};
console.log(coinChange([1, 2, 5], 11));
