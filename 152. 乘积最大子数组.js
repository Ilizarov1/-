/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	let cur_min = 1,
		cur_max = 1,
		max = Number.MIN_SAFE_INTEGER
	for (let n of nums) {
		if (n < 0) {
			// 负数交换
			let tmp = cur_max
			cur_max = cur_min
			cur_min = tmp
		}

		cur_max = Math.max(cur_max * n, n)
		cur_min = Math.min(cur_min * n, n)

		if (cur_max > max) {
			max = cur_max
		}
	}
	return max
}

/**
 * 动态规划
 * 负数时交换最大最小
 */
