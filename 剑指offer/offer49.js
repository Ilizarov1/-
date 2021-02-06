/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
	let [a, b, c] = [0, 0, 0];
	let dp = new Array();
	dp[0] = 1;
	let i = 0;
	while (dp.length < n) {
		let [ra, rb, rc] = [dp[a] * 2, dp[b] * 3, dp[c] * 5];
		let min = Math.min(ra, rb, rc);
		if (min == ra) a++;
		if (min == rb) b++;
		if (min == rc) c++;
		dp[++i] = min;
	}
	return dp[n - 1];
};
console.log(nthUglyNumber(10));
