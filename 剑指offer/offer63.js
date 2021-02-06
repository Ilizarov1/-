/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	if (prices.length == 0) return 0;
	let dp = new Array(prices).fill(0);
	let cost = prices[0],
		price = prices[0];
	for (let i = 1; i < prices.length; i++) {
		price = prices[i];
		if (price < cost) {
			cost = price;
		}
		dp[i - 1] > price - cost ? (dp[i] = dp[i - 1]) : (dp[i] = price - cost);
	}
	return dp[prices.length - 1];
};
console.log(maxProfit([]));
