/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function (n) {
	let dp = new Array();
	let res = new Array();
	for (let i = 0; i < n + 1; i++) {
		dp.push(new Array(6 * n + 1));
		dp[i].fill(0);
	}
	let row = dp.length,
		col = dp[0].length;
	for (let i = 1; i <= 6; i++) dp[1][i] = 1;
	for (let j = 2; j < row; j++) {
		for (let s = j; s < col; s++) {
			for (let k = 1; k <= 6; k++) {
				if (s - k > 0) {
					dp[j][s] += dp[j - 1][s - k];
				} else {
					break;
				}
			}
		}
	}
	let d = Math.pow(6, n);
	for (let s = n; s <= 6 * n; ++s) {
		res[s - n] = dp[n][s] / d;
	}
	return res;
};
console.log(dicesProbability(2));
