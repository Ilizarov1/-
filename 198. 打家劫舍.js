/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (nums.length === 0) return 0
	if (nums.length === 1) return nums[0]
	prev = nums[0]
	cur = Math.max(prev, nums[1])
	for (let i = 2; i < nums.length; i++) {
		let tmp = Math.max(prev + nums[i], cur)
		prev = cur
		cur = tmp
	}
	return cur
}

/**
 * 动态规划
 * f(k) = max { f(k-2)+nums[k] , f(k-1) }
 */
